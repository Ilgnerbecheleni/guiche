import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChamadaModule } from './chamada/chamada.module';
import { PrismaModule } from './prisma/prisma.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [ChamadaModule, PrismaModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
