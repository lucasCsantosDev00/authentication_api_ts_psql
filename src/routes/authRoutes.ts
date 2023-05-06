import { Router } from 'express'
import { ErrorHandler } from '@/http/middlewares/ErrorHandler'
import { AuthController } from '@/http/controllers/AuthController'

const authController = new AuthController()
const router = Router()

router.post("/signup", ErrorHandler.catchErrors(authController.signUp))

export default router;