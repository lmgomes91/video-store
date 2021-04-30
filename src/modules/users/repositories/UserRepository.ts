import { getRepository, Repository } from "typeorm";
import { crypt } from "../../../shared/utils/crypt.utils";
import { ICreateUser } from "../dtos/ICreateUserDTO";
import { IRetriveUser } from "../dtos/IRetrieveUserDTO";
import { IUpdateUser } from "../dtos/IUpdateUserDTO";
import {IRetriveOneUser} from "../dtos/IRetrieveOneUserDTO"
import User from "../entities/User";

export class UserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(iCreate: ICreateUser): Promise<User | Error> {
    try {
      const user = this.ormRepository.create(iCreate);
      return await this.ormRepository.save(user);
    } catch (error) {
      return new Error(error);
    }
  }

  public async retrieve(iRetrieve?: IRetriveUser): Promise<User[] | Error> {
    try {
      let users: User[] = [];

      if (iRetrieve) {
        users = await this.ormRepository.find({
          where: iRetrieve,
        });
      } else {
        users = await this.ormRepository.find();
      }
      return users;
    } catch (error) {
      return new Error(error);
    }
  }

  public async update(iUpdate: IUpdateUser): Promise<User | Error> {
    try {
      const user = await this.ormRepository.findOne(iUpdate.id);

      if (!user) {
        return new Error(`Id ${iUpdate.id} has no user associated`);
      }

      user.email = iUpdate.email || user.email;
      user.name = iUpdate.name || user.name;
      user.password = iUpdate.password || user.password;

      return await this.ormRepository.save(user);
    } catch (error) {
      return new Error(error);
    }
  }

  public async delete(id: string): Promise<boolean | Error> {
    try {
      const deleted = await this.ormRepository.delete({ id });

      return !!deleted.affected;
    } catch (error) {
      return new Error(error);
    }
  }

  public async retrieveOne(iRetrieveOne?: IRetriveOneUser): Promise<User | Error> {
    try {
      // let users: User[] = [];

      const user = await this.ormRepository.findOne({
        where: iRetrieveOne,
      });

      if(!user){
        return new Error('User not found')
      }
      return user;
    } catch (error) {
      return new Error(error);
    }
  }
}
