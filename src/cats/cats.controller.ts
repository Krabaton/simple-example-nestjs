import { Controller, Get, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cats.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('cats')
@UseGuards(AuthGuard())
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Get()
  getCats(): Promise<Cat[]> {
    return this.catsService.getCats()
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCat(@Body() createCat: CreateCatDto): Promise<Cat> {
    return this.catsService.createCat(createCat)
  }
}
