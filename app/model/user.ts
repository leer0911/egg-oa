import { Application } from 'egg';

export default function (app: Application) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: STRING(30),
    password: INTEGER,
    created_at: DATE(6),
    updated_at: DATE(6),
  });

  return class extends User {};
}
