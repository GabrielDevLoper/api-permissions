import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTablePermissionsRoles1614895496687 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "permissions_roles",
                columns: [
                    {
                        name: "id_role",
                        type: "varchar"
                    },
                    {
                        name: "id_permission",
                        type: "varchar"
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "permissions_roles",
            new TableForeignKey({
                columnNames: ["id_permission"],
                referencedColumnNames: ["id"],
                referencedTableName: "permissions",
                name: "fk_permission_roles",
                onDelete: "CASCADE",
                onUpdate: "SET NULL"
            })
        )

        await queryRunner.createForeignKey(
            "permissions_roles",
            new TableForeignKey({
                columnNames: ["id_role"],
                referencedColumnNames: ["id"],
                referencedTableName: "roles",
                name: "fk_roles_permissions",
                onDelete: "CASCADE",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("permissions_roles", "fk_permission_roles");
        await queryRunner.dropForeignKey("permissions_roles", "fk_roles_permissions");
        await queryRunner.dropTable("permissions_roles");
    }

}
