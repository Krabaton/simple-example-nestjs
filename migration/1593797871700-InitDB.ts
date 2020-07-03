import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDB1593797871700 implements MigrationInterface {
    name = 'InitDB1593797871700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "salt" varchar NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`);
        await queryRunner.query(`CREATE TABLE "cat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cat"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
