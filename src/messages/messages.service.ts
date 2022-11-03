import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  findById(id: string) {
    return this.messagesRepo.findById(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  createMessage(content: string) {
    return this.messagesRepo.createMessage(content);
  }
}
