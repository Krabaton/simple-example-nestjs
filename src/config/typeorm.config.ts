import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Cat } from 'src/cats/cats.entity'
import { User } from 'src/auth/user.entity'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  entities: [Cat, User],
  database: './data/cats.sqlite',
  logging: true,
  synchronize: true,
}