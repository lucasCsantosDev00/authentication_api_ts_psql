import { IsNotEmpty, MinLength, MaxLength, IsEmail } from "class-validator";
import { User } from "@/database/entities/user.entity";
import { IsUnique } from "../validators/isUniqueValidator";

export class signUpDTO {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  @IsUnique(User, "email")
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  password: string;
}
