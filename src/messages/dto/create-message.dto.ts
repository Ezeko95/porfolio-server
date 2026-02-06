import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  content!: string;
}