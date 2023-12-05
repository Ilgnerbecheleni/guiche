/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketService {

  constructor(private readonly ticketService:PrismaService){}

  async  contarTicketsPorDia(data) {
    const contagem = await this.ticketService.ticket.count({
      where: {
        dataHora: {
          gte: new Date(data),
          lt: new Date(data + 'T23:59:59'), // Considerando a contagem até o final do dia
        },
      },
    });
  
    return contagem;
  }

  async create(createTicketDto: CreateTicketDto) {
    try {
  
      const dataAtual = new Date();
      const dataEspecifica = dataAtual.toISOString().split('T')[0];

      const contagem = await this.contarTicketsPorDia(dataEspecifica);

      const ticket = await this.ticketService.ticket.create({
        data: {
          ...createTicketDto,
          senhaDia: contagem + 1, 
        },
      });

      return ticket;
    } catch (error) {

      throw new BadRequestException('Erro ao criar ticket');
    }
  }

  async findId(id:number){
    try {
      const ticket = await this.ticketService.ticket.findFirst({where:{id}});
      if(!ticket){
        throw new NotFoundException(`O ticket de id ${id}, não foi encontrado`);
      }
      return ticket;
    } catch (error) {
      throw new BadRequestException('Erro ao criar ticket');
    }
  }

  async update(id:number) {
    try {
    
      const ticket = await this.findId(id);
      
      const atendido = !ticket.atendido ;
      // Atualize o ticket no banco de dados
      const ticketUpdated = await this.ticketService.ticket.update({
        where: { id },
        data: { atendido },
      });

      return ticketUpdated;
    } catch (error) {
      // Lide com erros aqui
      console.error('Erro ao atualizar ticket:', error);
      throw new Error('Erro ao atualizar ticket');
    }
  }

  async findAll

}
