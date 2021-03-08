import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableUsersRoles1615154559200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users_roles",
                    columns: [
                        {
                            name: "id_role",
                            type: "varchar",
                            
                        },
                        {
                            name: "id_user",
                            type: "varchar",
                        }
                    ]
                },
            )
        );

        await queryRunner.createForeignKey(
            "users_roles",
            new TableForeignKey({
                columnNames: ["id_role"],
                referencedColumnNames: ["id"],
                referencedTableName: "roles",
                name: "fk_roles_users",
                onDelete: "CASCADE",
                onUpdate: "SET NULL"
            })
        )

        await queryRunner.createForeignKey(
            "users_roles",
            new TableForeignKey({
                columnNames: ["id_user"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                name: "fk_users_roles",
                onDelete: "CASCADE",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("users_roles", "fk_roles_users");
        await queryRunner.dropForeignKey("users_roles", "fk_users_roles");
        await queryRunner.dropTable("users_roles");
    }

}
