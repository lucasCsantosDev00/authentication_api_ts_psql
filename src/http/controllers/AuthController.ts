import { NextFunction, Request, Response } from "express";
import { SignUpDTO } from "../dtos/AuthDTO";
import { validateOrReject } from "class-validator";
import AppDataSource from "@/database/db.config";
import { User } from "@/database/entities/user.entity";
import { ResponseUtil } from "@/utils/Response";

export class AuthController {
    async signUp(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const signUpData = req.body

        const dto = new SignUpDTO
        dto.email = signUpData.email;
        dto.userName = signUpData.userName;
        dto.password = signUpData.password;

        await validateOrReject(dto)

        const repository = AppDataSource.getRepository(User)

        const user = repository.create(signUpData)

        await repository.save(user)

        return ResponseUtil.sendResponse(res, 'Sign up succesful!', user)
        
    }
}