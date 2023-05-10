import { NextFunction, Request, Response } from "express";
import { SignUpDTO, LoginDTO } from "../dtos/AuthDTO";
import { validateOrReject } from "class-validator";
import AppDataSource from "@/database/db.config";
import { User } from "@/database/entities/user.entity";
import { ResponseUtil } from "@/utils/Response";
import {compare} from 'bcryptjs'
import {sign} from "jsonwebtoken"

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

    async login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        const dto = new LoginDTO()
        dto.email = email
        dto.password = password

        await validateOrReject(dto)

        const repository = AppDataSource.getRepository(User)
        const user = await repository.findOneBy({email})
        if(!user) {
            return ResponseUtil.sendError(res, "Invalid Credentials", 401, null)
        }
        let passwordMatches = await compare(password, user.password)

        if(!passwordMatches) {
            return ResponseUtil.sendError(res, "Invalid credentials", 401, null)
        }
        let accessToken = sign({userId:user.id}, process.env.ACCESS_KEY_SECRET || "secret123", {expiresIn: "30m",})

        const returnUser = user.toResponse();

        return ResponseUtil.sendResponse(res, "User login success", { user: returnUser, accessToken });

    }
}