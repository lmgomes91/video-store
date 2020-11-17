import { JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Movie from "../../movies/entities/Movie";
import User from "../../users/entities/User";

class Rent {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user_id: string;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: "movie_id" })
  movie_id: string;
}

export default Rent;
