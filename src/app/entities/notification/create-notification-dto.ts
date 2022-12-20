import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationDTO {
  @IsNotEmpty()
  public category: string;

  @IsNotEmpty()
  @Length(5, 240)
  public content: string;

  @IsUUID('4')
  @IsNotEmpty()
  public recipientId: string;
}
