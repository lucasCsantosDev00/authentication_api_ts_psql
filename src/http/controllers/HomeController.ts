import { NextFunction, Request, Response } from "express";
import { ResponseUtil } from "@/utils/Response";

export class HomeController {
  async home(req: Request, res: Response, next: NextFunction) {
    return ResponseUtil.sendResponse(
      res,
      "You are logged in this application",
      null
    );
  }
}
