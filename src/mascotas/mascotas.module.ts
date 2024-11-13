import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';

@Module({
  controllers: [MascotasController],
  providers: [MascotasService],
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([Mascota])],
})
export class MascotasModule {}
