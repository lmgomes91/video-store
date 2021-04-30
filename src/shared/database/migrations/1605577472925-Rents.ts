import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Rents1605577472925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "rents",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "movie_id",
            type: "uuid",
          },
          {
            name: "devolution",
            type: "timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "rents",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "rents",
      new TableForeignKey({
        columnNames: ["movie_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "movies",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("rents", "movie_id");
    await queryRunner.dropForeignKey("rents", "user_id");
    await queryRunner.dropTable("rents");
  }
}
