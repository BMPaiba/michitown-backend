import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Mascota {
  @PrimaryColumn('uuid')
  id: string;
  @Column('text')
  name: string;
  @Column('text')
  breed: string;
  @Column('text')
  color: string;
  @Column('float')
  weight: number;
  @Column('text', { array: true })
  size: ['pequeño', 'mediano', 'grande'];
  @Column('text')
  description: string;
  @Column('text', { array: true, default: [] })
  neutered: boolean;
  @Column('text', { array: true, default: [] })
  vaccines: string[];
  @Column('text')
  city: string
  // @Column('bool', { default: false })
  // images: string[];
  // user: string
}
