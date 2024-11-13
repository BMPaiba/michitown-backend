import {
  IsIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateMascotaDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  breed: string;

  @IsString()
  @MinLength(3)
  color: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  weight?: number;

  @IsIn(['men', 'women', 'kid', 'unisex'])
  size: string;

  @IsString()
  @MinLength(3)
  description: string;

  @IsOptional()
  neutered?: boolean;

  @IsOptional()
  vaccines?: string[];

  @IsString()
  @MinLength(3)
  city: string;
}
