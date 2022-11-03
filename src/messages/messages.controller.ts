import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from 'src/dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public serviceRepository: MessagesService) {}

  @Get()
  getAllMessages() {
    return this.serviceRepository.findAll();
  }

  @Post()
  postMessage(@Body() body: CreateMessageDto) {
    console.log(body.message);
    return this.serviceRepository.createMessage(body.message);
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return this.serviceRepository.findById(id);
  }
}
