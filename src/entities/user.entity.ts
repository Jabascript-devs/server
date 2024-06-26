import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';

export enum userCategory {
  student = 'student',
  pensioner = 'pensioner',
  none = 'none',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name', nullable: false, unique: true })
  fullName: string;

  @Column({ name: 'balance', type: 'float', nullable: true, default: 0.0 })
  balance: number;

  @Column({ nullable: false, unique: true })
  address: string;

  @Column({ name: 'phone_number', nullable: false, unique: true })
  phoneNumber: string;

  @Column({
    name: 'category',
    nullable: true,
    type: 'enum',
    enum: userCategory,
    default: userCategory.none,
  })
  userCategory: userCategory;

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];
}
