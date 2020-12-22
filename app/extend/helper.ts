export default {
  parseInt(str: string | number) {
    if (typeof str === 'number') return str;
    if (!str) return 0;
    return parseInt(str) || 0;
  },
  success({ ctx, res, msg = '请求成功' }: { ctx: any; res?: any; msg?: string }) {
    ctx.body = {
      code: 200,
      data: res,
      msg,
    };
    ctx.status = 200;
  },
};
