import { Injectable } from '@nestjs/common';
import { CreateChamadaDto } from './dto/create-chamada.dto';
import { UpdateChamadaDto } from './dto/update-chamada.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChamadaService {
 
  constructor(private readonly chamadaService: PrismaService) {}

  async create(createChamadaDto: CreateChamadaDto) {
    return 'This action adds a new chamada';
  }

  async findAll() {
    return `This action returns all chamada`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} chamada`;
  }

  async update(id: number, updateChamadaDto: UpdateChamadaDto) {
    return `This action updates a #${id} chamada`;
  }

  async remove(id: number) {
    return `This action removes a #${id} chamada`;
  }
}
