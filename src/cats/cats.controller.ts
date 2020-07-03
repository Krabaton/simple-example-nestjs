import { Controller, Get, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cats.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('cats')
@UseGuards(AuthGuard())
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Get()
  getCats(@GetUser() user: User): Promise<Cat[]> {
    return this.catsService.getCats(user)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCat(@GetUser() user: User, @Body() createCat: CreateCatDto): Promise<Cat> {
    return this.catsService.createCat(createCat, user)
  }
}
