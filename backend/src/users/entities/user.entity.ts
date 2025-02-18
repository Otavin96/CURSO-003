import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "../models/user.model";

@Entity()
export class User implements UserModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
