import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const message = this.messagesRepository.create(createMessageDto);
    return await this.messagesRepository.save(message);
  }

  async findAll(): Promise<Message[]> {
    return await this.messagesRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async remove(id: string): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}