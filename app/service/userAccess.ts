import { Service } from 'egg';

export default class UserAccessService extends Service {
  async login({ username = '', password = '' }) {
    const user = await this.ctx.model.User.findOne({ where: { username, password } });
    if (!user) {
      this.ctx.throw(404, '用户名或密码错误');
    }
    const token = this.app.jwt.sign(
      {
        data: {
          id: (user as any).id,
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      },
      this.app.config.jwt.secret,
    );
    return token!;
  }

  async logout() {
    this.ctx.session = null;
  }

  async current() {
    const { ctx, service } = this;
    console.log(ctx.state);
    const user = await service.user.find(1);
    if (!user) {
      ctx.throw(404, 'user is not found');
    }
    return user;
  }
}
