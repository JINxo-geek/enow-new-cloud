import { Controller } from "egg";
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.renderClient("home.js", {
      title: "--Ant Design Tab--",
      keywords: "react, server side render, ant design",
      message: { text: "Ant Design Tab Theme and Code Spliting" }
    });
  }
  public async login() {
    console.log("登录login");
    const { ctx } = this;
    await ctx.renderClient("login.js", {
      title: "--Ant Design Tab--",
      keywords: "react, server side render, ant design",
      message: { text: "Ant Design Tab Theme and Code Spliting" }
    });
  }
}
