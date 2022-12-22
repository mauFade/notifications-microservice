import { Body, Controller, Post } from '@nestjs/common';
import { NotificationRepository } from 'src/app/entities/notification/database/repositories/NotificationRepository';
import { CreateNotificationService } from 'src/app/entities/notification/services/CreateNotificationService';
import { Notification } from '../app/entities/notification/database/entitites/notification';
import { CreateNotificationDTO } from '../app/entities/notification/dtos/create-notification-dto';
import { PrismaService } from './database/prisma.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly prismaService: PrismaService) {}

  // @Get()
  // public async find(): Promise<Notification[]> {
  //   const notifications =
  //     (await this.prismaService.notification.findMany()) as Notification[];

  //   return notifications;
  // }

  @Post('create')
  public async create(
    @Body() body: CreateNotificationDTO,
  ): Promise<Notification> {
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
