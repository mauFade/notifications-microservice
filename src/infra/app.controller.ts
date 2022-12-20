import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification } from '../app/entities/notification/notification';
import { CreateNotificationDTO } from '../app/entities/notification/create-notification-dto';
import { PrismaService } from './database/prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  public async find(): Promise<Notification[]> {
    const notifications =
      (await this.prismaService.notification.findMany()) as Notification[];

    return notifications;
  }

  @Post('create')
  public async create(
    @Body() body: CreateNotificationDTO,
  ): Promise<Notification> {
    const { category, content, recipientId } = body;

    const notification = (await this.prismaService.notification.create({
      data: {
        category,
        content,
        recipientId,
      },
    })) as Notification;

    return notification;
  }
}
