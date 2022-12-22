import { PrismaService } from '../../../../../infra/database/prisma.service';
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
  }: Notification): Promise<Notification> {
    const notificationContent = content.value;

    const notification = (await this.prismaService.notification.create({
      data: {
        category,
        content: notificationContent,
        recipientId,
      },
    })) as unknown as Notification;

    return notification;
  }
}
