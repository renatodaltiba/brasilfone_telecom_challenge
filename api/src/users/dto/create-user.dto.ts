import { IsBoolean, IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @Length(5, 100)
  name: string

  @IsEmail()
  @IsNotEmpty()
  @Length(5, 100)
  email: string

  @IsNotEmpty()
  @Length(9, 11)
  phone: string

  @IsNotEmpty()
  @Length(1, 20)
  ddi: string

  @IsNotEmpty()
  @Length(8, 60)
  password: string

  @IsBoolean()
  offers: boolean
}
