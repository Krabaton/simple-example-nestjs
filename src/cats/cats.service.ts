import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatRepository } from 'src/repository/cats.repository';
import { Cat } from './cats.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatRepository)
    private catRepository: CatRepository
  ) { }
  async getCats(): Promise<Cat[]> {
    return this.catRepository.getCats()
  }
  async createCat(createCat: CreateCatDto): Promise<Cat> {
    return this.catRepository.createCat(createCat)
  }
}
