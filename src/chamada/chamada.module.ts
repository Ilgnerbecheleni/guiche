import { Module } from '@nestjs/common';
import { ChamadaService } from './chamada.service';
import { ChamadaController } from './chamada.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaService],
  controllers: [ChamadaController],
  providers: [ChamadaService],
})
export class ChamadaModule {}
