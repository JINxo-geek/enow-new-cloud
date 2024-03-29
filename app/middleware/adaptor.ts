/**
 * @author souliz
 * @description API路由适配中间件
 */

import * as Adaptor from "@cvte/easi-adaptor";
import apis from "../apis/index";
import { get } from "lodash";
import { logger, Code } from "./utils";

export default function(options) {
  return async (ctx, next) => {
    const _logger = logger(ctx);
    let accessToken = ctx.cookies.get("x-auth-token", {
      signed: false
    });
    /*   配置临时accessToken */
    accessToken = "635bf02420054597a731782cfe5060c7";
    const appCode = ctx.cookies.get("x-auth-app", {
      signed: false
    });

    const appCodeConfig = get(options, "authApp", "EasiNote5");

    const headers = {
      "Content-Type": "application/json",
      "user-agent": "default",
      Accept: "*/*",
      Authorization: "",
      "x-auth-refer": "EasiNoteWeb",
      Cookie:
        "x-auth-token=" +
        accessToken +
        ";x-auth-app=" +
        (appCode || appCodeConfig)
    };

    const adaptorConfig = {
      validatiors: {},
      apis,
      http: {
        headers,
        baseURL: get(options, "baseURL.edu", ""),
        beforeRequest(httpConfig) {
          _logger(Code.beginConfig);
          ctx.logger.info(httpConfig);
          _logger(Code.endConfig);
        }
      }
    };

    const adaptor = new Adaptor(adaptorConfig);
    ctx.request.dispatch = adaptor.dispatch.bind(adaptor);

    await next();
  };
}
