This readme file is explanation for initial migrations for entities.

A migration is just a single file with sql queries to update a database schema and apply new changes to an existing database.

To create a new project with everything already setup:

    #npx typeorm init

Before creating a new migration you need to setup your data source options properly:

    {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [/*...*/],
    migrations: [/*...*/],
    migrationsTableName: "custom_migration_table",
    }

Here we setup two options:

"migrationsTableName": "migrations" - Specify this option only if you need migration table name to be different from "migrations".
"migrations": [/*...*/] - list of migrations need to be loaded by TypeORM.

Once you setup connection options you can create a new migration using CLI:

# typeorm migration:create ./path-to-migrations-dir/PostRefactoring

Here, PostRefactoring is the name of the migration - you can specify any name you want. After you run the command you can see a new file generated in the "migration" directory named {TIMESTAMP}-PostRefactoring.ts where {TIMESTAMP} is the current timestamp when the migration was generated. Now you can open the file and add your migration sql queries there.

You should see the following content inside your migration:

    import { MigrationInterface, QueryRunner } from "typeorm"

    export class PostRefactoringTIMESTAMP implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {}

        async down(queryRunner: QueryRunner): Promise<void> {}

    }

There are two methods you must fill with your migration code: up and down. up has to contain the code you need to perform the migration. down has to revert whatever up changed. down method is used to revert the last migration.

Inside both up and down you have a QueryRunner object. All database operations are executed using this object. Learn more about query runner.

Let's see what the migration looks like with our Post changes:

    import { MigrationInterface, QueryRunner } from "typeorm"

    export class PostRefactoringTIMESTAMP implements MigrationInterface {
        async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(
                `ALTER TABLE "post" RENAME COLUMN "title" TO "name"`,
            )
        }

        async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(
                `ALTER TABLE "post" RENAME COLUMN "name" TO "title"`,
            ) // reverts things made in "up" method
        }
    }
