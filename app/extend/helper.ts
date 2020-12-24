export default {
  parseInt(str: string | number) {
    if (typeof str === 'number') return str;
    if (!str) return 0;
    return parseInt(str) || 0;
  },
  success({ ctx, res, msg = '请求成功' }: { ctx: any; res?: any; msg?: string }) {
    ctx.body = {
      status: 'ok',
      data: res,
      msg,
    };
    ctx.status = 200;
  },
  error({ ctx, res, msg = '请求失败' }: { ctx: any; res?: any; msg?: string }) {
    ctx.body = {
      status: 'error',
      data: res,
      msg,
    };
    ctx.status = 200;
  },
};
