import { EntityRepository, Repository } from "typeorm";
import { Cat } from '../cats/cats.entity'
import { CreateCatDto } from "src/cats/dto/create-cat.dto";
import { InternalServerErrorException } from "@nestjs/common";
import { User } from 'src/auth/user.entity';

@EntityRepository(Cat)
export class CatRepository extends Repository<Cat> {
  async getCats(user: User): Promise<Cat[]> {
    return await this.find({ where: { user } })
  }

  async createCat(createCat: CreateCatDto, user: User): Promise<Cat> {
    const { name, age } = createCat
    const cat = new Cat()
    cat.name = name
    cat.age = age
    cat.user = user
    try {
      await cat.save()
    } catch (e) {
      throw new InternalServerErrorException()
    }
    delete cat.user
    return cat
  }
}