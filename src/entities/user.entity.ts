import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';

export enum userCategory {
  student = 'student',
  pensioner = 'pensioner',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  fullName: string;

  @Column({ nullable: false, unique: true })
  address: string;

  @Column({ nullable: false, unique: true })
  phoneNumber: string;

  @Column({ nullable: false, type: 'enum', enum: userCategory })
  userCategory: userCategory;

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];
}
