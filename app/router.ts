import { Application } from 'egg';

export default function (app: Application) {
  app.resources('users', '/users', app.controller.user);
}
