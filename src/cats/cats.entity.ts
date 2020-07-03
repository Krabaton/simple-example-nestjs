import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../auth/user.entity";

@Entity()
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  age: number

  @ManyToOne(type => User, user => user.cats, { eager: false })
  user: User
}