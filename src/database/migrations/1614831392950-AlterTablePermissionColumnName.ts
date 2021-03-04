import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTablePermissionColumnName1614831392950 implements MigrationInterface {
    name = 'AlterTablePermissionColumnName1614831392950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "permissions"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "UQ_48ce552495d14eae9b187bb6716" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "UQ_48ce552495d14eae9b187bb6716"`);
        await queryRunner.query(`COMMENT ON COLUMN "permissions"."name" IS NULL`);
    }

}
