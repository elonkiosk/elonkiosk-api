import { IsString } from 'class-validator';

export class CreateManagerDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;
}
