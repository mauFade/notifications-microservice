import { PrismaService } from '../../../../../infra/database/prisma.service';
import { INotification } from '../../dtos/notification';
import {
  INotificationRepository,
  Notification,
} from '../entitites/notification';

export class NotificationRepository implements INotificationRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create({
    category,
    content,
    recipientId,
  }: Notification): Promise<INotification> {
    const notificationContent = content.value;

    const notification = await this.prismaService.notification.create({
      data: {
        category,
        content: notificationContent,
        recipientId,
      },
    });

    return {
      id: notification.id,
      category: notification.category,
      content: notification.content,
      recipientId: notification.recipientId,
      created_at: notification.created_at,
      read_at: notification.read_at,
    };
  }
}
