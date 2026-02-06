import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './messages/messages.module';
import { Message } from './messages/entities/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Message],
      synchronize: true, 
    }),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
