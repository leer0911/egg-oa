import { Service } from 'egg';

export default class UserAccessService extends Service {
  async login({ username = '', password = '' }) {
    const user = await this.ctx.model.User.findOne({ where: { username, password } });
    if (!user) {
      this.ctx.helper.error({ ctx: this.ctx, msg: '用户名或密码错误' });
      return null;
    }

    return user!;
  }

  async logout() {
    this.ctx.session = null;
  }

  async current() {
    const { ctx, service } = this;
    const { user = {} } = ctx.state;
    const userInfo = await service.user.find(user.id);
    if (!userInfo) {
      ctx.throw(404, 'user is not found');
    }
    return userInfo;
  }
}
