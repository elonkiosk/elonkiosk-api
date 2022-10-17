import { IsString } from 'class-validator';

export class LoginManagerDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;
}
