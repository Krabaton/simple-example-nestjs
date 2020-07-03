import {MigrationInterface, QueryRunner} from "typeorm";

export class addRelationCatAndUser1593798510171 implements MigrationInterface {
    name = 'addRelationCatAndUser1593798510171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_cat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_cat"("id", "name", "age") SELECT "id", "name", "age" FROM "cat"`);
        await queryRunner.query(`DROP TABLE "cat"`);
        await queryRunner.query(`ALTER TABLE "temporary_cat" RENAME TO "cat"`);
        await queryRunner.query(`CREATE TABLE "temporary_cat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL, "userId" integer, CONSTRAINT "FK_21865a41bd58756f46e252cdf30" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_cat"("id", "name", "age", "userId") SELECT "id", "name", "age", "userId" FROM "cat"`);
        await queryRunner.query(`DROP TABLE "cat"`);
        await queryRunner.query(`ALTER TABLE "temporary_cat" RENAME TO "cat"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" RENAME TO "temporary_cat"`);
        await queryRunner.query(`CREATE TABLE "cat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "cat"("id", "name", "age", "userId") SELECT "id", "name", "age", "userId" FROM "temporary_cat"`);
        await queryRunner.query(`DROP TABLE "temporary_cat"`);
        await queryRunner.query(`ALTER TABLE "cat" RENAME TO "temporary_cat"`);
        await queryRunner.query(`CREATE TABLE "cat" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "cat"("id", "name", "age") SELECT "id", "name", "age" FROM "temporary_cat"`);
        await queryRunner.query(`DROP TABLE "temporary_cat"`);
    }

}
