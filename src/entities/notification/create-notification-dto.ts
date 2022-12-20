import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNotificationDTO {
  @IsNotEmpty()
  public category: string;

  @IsNotEmpty()
  public content: string;

  @IsUUID('4')
  @IsNotEmpty()
  public recipientId: string;
}
