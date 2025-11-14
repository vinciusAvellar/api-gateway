import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsInt()
  idade: number;

  @IsString()
  senha: string;
}
