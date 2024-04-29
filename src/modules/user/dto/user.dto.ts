import { IsString, IsInt } from 'class-validator';
import { userCategory } from '../../../entities/user.entity';
import { Order } from '../../../entities/order.entity';

export class UserDto {
  @IsInt()
  id?: number;

  @IsString()
  fullName?: string;

  @IsString()
  address?: string;

  @IsString()
  phoneNumber?: string;

  userCategory?: userCategory;

  order?: Order[];
}
