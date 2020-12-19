import { Controller } from 'egg';

export default class AccountController extends Controller {
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    ctx.service.account.checkUser(data);

    const token = app.jwt.sign(
      {
        username: data.username,
      },
      app.config.jwt.secret,
    );

    ctx.body = token;
  }
}
