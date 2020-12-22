import { Application } from 'egg';

export default function (app: Application) {
  const { router, controller } = app;

  router.post('/api/user/access/login', controller.userAccess.login);
  router.get('/api/user/access/current', app.jwt, controller.userAccess.current);
  router.get('/api/user/access/logout', controller.userAccess.logout);

  app.resources('user', '/api/user', app.jwt, app.controller.user);
  // app.resources('role', '/api/role', app.jwt, app.controller.user);
}
