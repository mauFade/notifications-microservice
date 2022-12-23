import { Content } from '../../content/content';
import {
  INotificationRepository,
  Notification,
} from '../database/entitites/notification';
import { INotification } from '../dtos/notification';

interface IRequest {
  content: string;
  recipientId: string;
  category: string;
}

export class CreateNotificationService {
  constructor(private notificationsRepository: INotificationRepository) {}

  public async execute({
    category,
    content,
    recipientId,
  }: IRequest): Promise<INotification> {
    const newContent = new Content(content);

    const notification = new Notification({
      category,
      content: newContent,
      recipientId,
    });

    const data = await this.notificationsRepository.create(notification);

    return data;
  }
}
