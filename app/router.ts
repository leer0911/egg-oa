import { Application } from 'egg';

export default function (app: Application) {
  app.post('/account/login', app.controller.account.login);
  app.resources('users', '/users', app.jwt, app.controller.user);
  app.resources('roles', '/roles', app.jwt, app.controller.user);
}
