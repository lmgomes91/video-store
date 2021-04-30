import { getRepository, Repository } from "typeorm";
import { crypt } from "../../../../shared/utils/crypt.utils";
import { ICreateUser } from "../../dtos/ICreateUserDTO";
import { IRetriveUser } from "../../dtos/IRetrieveUserDTO";
import { IUpdateUser } from "../../dtos/IUpdateUserDTO";
import User from "../../entities/User";
import { v1 } from "uuid";

export class UserRepository {
  private ormRepository: User[] = [];

  public async create(iCreate: ICreateUser): Promise<User | Error> {
    try {
      const user = new User();

      user.email = iCreate.email;
      user.name = iCreate.name;
      user.id = v1();
      user.password = iCreate.password;
      user.created_at = new Date();
      user.updated_at = new Date();

      // console.log(user);
      this.ormRepository.push(user);
      return user;
      //   return await this.ormRepository.save(user);
    } catch (error) {
      return new Error(error);
    }
  }

  public async retrieve(iRetrieve?: IRetriveUser): Promise<User[] | Error> {
    try {
      let users: User[] = [];

      if (iRetrieve) {
        users = this.ormRepository.filter(({email,name,id}) => email === iRetrieve.email || name === iRetrieve.name || id === iRetrieve.id);
      } else {
        users = this.ormRepository
      }
      return users;
    } catch (error) {
      return new Error(error);
    }
  }

  public async update(iUpdate: IUpdateUser): Promise<User | Error> {
    try {
      const user = this.ormRepository.find(u => u.id === iUpdate.id);

      if (!user) {
        return new Error(`Id ${iUpdate.id} has no user associated`);
      }
      
      const index = this.ormRepository.indexOf(user)

      user.email = iUpdate.email || user.email;
      user.name = iUpdate.name || user.name;
      user.password = iUpdate.password || user.password;

      this.ormRepository[index] = user;

      return user
    } catch (error) {
      return new Error(error);
    }
  }

  //   public async delete(id: string): Promise<boolean | Error> {
  //     try {
  //       const deleted = await this.ormRepository.delete({ id });

  //       return !!deleted.affected;
  //     } catch (error) {
  //       return new Error(error);
  //     }
  //   }
}
