import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import * as bcrypt from 'bcryptjs'
import { Cat } from '../cats/cats.entity'

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  salt: string

  @OneToMany(type => Cat, cat => cat.user, { eager: true })
  cats: Cat[]

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt)
    return hash === this.password
  }
}