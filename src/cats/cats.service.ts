import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatRepository } from 'src/repository/cats.repository';
import { Cat } from './cats.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatRepository)
    private catRepository: CatRepository
  ) { }
  async getCats(user: User): Promise<Cat[]> {
    return this.catRepository.getCats(user)
  }
  async createCat(createCat: CreateCatDto, user: User): Promise<Cat> {
    return this.catRepository.createCat(createCat, user)
  }
}
