import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo = new MessagesRepository();

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

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
