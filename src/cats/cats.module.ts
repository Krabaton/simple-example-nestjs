import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatRepository } from 'src/repository/cats.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([CatRepository]), AuthModule],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule { }
