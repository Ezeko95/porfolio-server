import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.create(createMessageDto);
  }

  @Get()
  async findAll() {
    return await this.messagesService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.messagesService.remove(id);
  }
}