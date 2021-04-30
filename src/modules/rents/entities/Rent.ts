import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Movie from "../../movies/entities/Movie";
import User from "../../users/entities/User";

@Entity("rents")
class Rent {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  movie_id: string;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: "movie_id" })
  movie: Movie;

  @Column()
  devolution: Date;
}

export default Rent;
