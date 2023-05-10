import { Router } from "express";
import { ErrorHandler } from "@/http/middlewares/ErrorHandler";
import { HomeController } from "@/http/controllers/HomeController";
import { AuthMiddleware } from "@/http/middlewares/AuthMiddleware";

const homeController = new HomeController();
const router = Router();

router.get(
  "/",
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(homeController.home)
);

export default router;
