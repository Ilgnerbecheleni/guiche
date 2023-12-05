import { IsBoolean } from 'class-validator';

export class CreateTicketDto {
  @IsBoolean()
  prioritario: boolean;

}
