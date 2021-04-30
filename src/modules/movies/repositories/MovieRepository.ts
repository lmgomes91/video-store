import { getRepository, Repository } from "typeorm";
import { ICreateMovie } from "../dtos/ICreateMovieDTO";
import { IRetriveMovie } from "../dtos/IRetrieveMovieDTO";
import { IUpdateMovie } from "../dtos/IUpdateMovieDTO";
import Movie from "../entities/Movie";

export class MovieRepository {
  private ormRepository: Repository<Movie>;

  constructor() {
    this.ormRepository = getRepository(Movie);
  }

  public async create(iCreate: ICreateMovie): Promise<Movie | Error> {
    try {
      const movie = this.ormRepository.create(iCreate);
      return await this.ormRepository.save(movie);
    } catch (error) {
      return new Error(error);
    }
  }

  public async retrieve(iRetrieve?: IRetriveMovie): Promise<Movie[] | Error> {
    try {
      let movies: Movie[];
      if (iRetrieve) {
        movies = await this.ormRepository.find({
          where: iRetrieve,
        });
      } else {
        movies = await this.ormRepository.find();
      }

      return movies;
    } catch (error) {
      return new Error(error);
    }
  }

  public async update(iUpdate: IUpdateMovie): Promise<Movie | Error> {
    try {
      const movie = await this.ormRepository.findOne(iUpdate.id);

      if (!movie) {
        return new Error(`Id ${iUpdate.id} has no movie associated`);
      }

      movie.amount = iUpdate.amount || movie.amount;
      movie.director = iUpdate.director || movie.director;
      movie.title = iUpdate.title || movie.title;

      return await this.ormRepository.save(movie);
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
