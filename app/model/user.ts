import { Application } from 'egg';

export default function (app: Application) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define(
    'users',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: STRING,
      password: STRING,
      created_at: DATE(6),
      updated_at: DATE(6),
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  );

  return class extends User {};
}
