import { getRepository, Repository } from "typeorm";
import { ICreateRent } from "../dtos/ICreateRentDTO";
import { IRetriveRent } from "../dtos/IRetrieveRentDTO";
import { IUpdateRent } from "../dtos/IUpdateRentDTO";
import Rent from "../entities/Rent";

export class RentRepository {
  private ormRepository: Repository<Rent>;
  constructor() {
    this.ormRepository = getRepository(Rent);
  }

  public async create(iCreate: ICreateRent): Promise<Rent | Error> {
    try {
      const rent = this.ormRepository.create(iCreate);
      return await this.ormRepository.save(rent);
    } catch (error) {
      return new Error(error);
    }
  }

  public async retrieve(iRetrieve?: IRetriveRent): Promise<Rent[] | Error> {
    try {
      let rents: Rent[];

      if (iRetrieve) {
        rents = await this.ormRepository.find({
          where: iRetrieve,
        });
      } else {
        rents = await this.ormRepository.find();
      }

      return rents;
    } catch (error) {
      return new Error(error);
    }
  }

  public async update(iUpdate: IUpdateRent) {
    try {
      const rent = await this.ormRepository.findOne(iUpdate.id);

      if (!rent) {
        return new Error(`Id ${iUpdate.id} has no rent associated`);
      }

      rent.movie_id = iUpdate.movie_id || rent.movie_id;
      rent.user_id = iUpdate.user_id || rent.user_id;

      return await this.ormRepository.save(rent);
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
}
