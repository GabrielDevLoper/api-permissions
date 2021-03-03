import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableUsersAddColumnStatusAndAlterColumnEmail1614737774143 implements MigrationInterface {
    name = 'AlterTableUsersAddColumnStatusAndAlterColumnEmail1614737774143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "status" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
    }

}
