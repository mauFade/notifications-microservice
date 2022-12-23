import { Body, Controller, Post } from '@nestjs/common';
import { NotificationRepository } from 'src/app/entities/notification/database/repositories/NotificationRepository';
import { INotification } from 'src/app/entities/notification/dtos/notification';
import { CreateNotificationService } from 'src/app/entities/notification/services/CreateNotificationService';
import { CreateNotificationDTO } from '../app/entities/notification/dtos/create-notification-dto';
import { PrismaService } from './database/prisma.service';

@Controller('notifications')
export class NotificationsController {
  @Post('create')
  public async create(
    @Body() body: CreateNotificationDTO,
  ): Promise<INotification> {
    const { category, content, recipientId } = body;

    const notificationsRepository = new NotificationRepository(
      new PrismaService(),
    );
    const createNotificationService = new CreateNotificationService(
      notificationsRepository,
    );

    const notification = await createNotificationService.execute({
      category,
      content,
      recipientId,
    });

    return notification;
  }
}
