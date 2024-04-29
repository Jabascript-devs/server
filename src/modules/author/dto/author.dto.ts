import { IsInt, IsString } from 'class-validator';

export class AuthorDto {
  @IsInt()
  id?: number;

  @IsString()
  fullName?: string;
}
