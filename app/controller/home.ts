import { Controller } from 'egg';
import * as path from 'path';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log('egg index =======================')
    await ctx.renderClient('home.js');
    // await ctx.render('home.js');
  }
}
