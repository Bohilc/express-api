import { MigrationInterface, QueryRunner } from "typeorm";

export class user1651160150837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE users ADD COLUMN created_at timestamp`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
