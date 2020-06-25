import { EntityRepository, Repository } from "typeorm";
import { Cat } from '../cats/cats.entity'
import { CreateCatDto } from "src/cats/dto/create-cat.dto";
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Cat)
export class CatRepository extends Repository<Cat> {
  async getCats(): Promise<Cat[]> {
    return await this.find()
  }

  async createCat(createCat: CreateCatDto): Promise<Cat> {
    const { name, age } = createCat
    const cat = new Cat()
    cat.name = name
    cat.age = age
    try {
      await cat.save()
    } catch (e) {
      throw new InternalServerErrorException()
    }
    return cat
  }
}