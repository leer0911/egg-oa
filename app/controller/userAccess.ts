import { Controller } from 'egg';

export default class UserAccessController extends Controller {
  UserLoginTransfer = {
    username: { type: 'string', required: true, allowEmpty: false },
    password: { type: 'string', required: true, allowEmpty: false },
  };

  async login() {
    const { ctx, app } = this;
    ctx.validate(this.UserLoginTransfer);

    const data = ctx.request.body;
    const res: any = await ctx.service.userAccess.login(data);

    if (!res) {
      return;
    }

    const token = app.jwt.sign(
      {
        id: res.id,
      },
      app.config.jwt.secret,
    );

    ctx.cookies.set('Authorization', token, { httpOnly: false });
    ctx.helper.success({ ctx, res: token });
  }

  // 获取当前用户信息
  async current() {
    const { ctx, service } = this;
    const res = await service.userAccess.current();
    ctx.body = res;
  }

  async logout() {
    const { ctx, service } = this;
    await service.userAccess.logout();
    ctx.helper.success({ ctx });
  }
}
