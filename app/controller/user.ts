import { Controller } from 'egg';

export default class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    const res = await ctx.service.user.list(query);
    ctx.helper.success({ ctx, res });
  }

  async show() {
    const { ctx } = this;
    const res = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
    ctx.helper.success({ ctx, res });
  }

  async create() {
    const { ctx } = this;
    const res = await ctx.service.user.create(ctx.request.body);
    ctx.helper.success({ ctx, res });
  }

  async update() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    const res = await ctx.service.user.update({ id, updates: body });
    ctx.helper.success({ ctx, res });
  }

  async destroy() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.del(id);
    ctx.helper.success({ ctx });
  }
}
