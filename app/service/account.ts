import { Service } from 'egg';

export default class Account extends Service {
  async checkUser({ username = '', password = '' }) {
    const user = await this.ctx.model.User.findOne({ where: { username, password } });
    if (!user) {
      this.ctx.throw(404, '用户名或密码错误');
    }
    return user!;
  }
}
