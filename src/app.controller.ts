import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  public find() {
    return this.prismaService.notification.findMany();
  }

  @Post('create')
  public async create() {
    const notification = await this.prismaService.notification.create({
      data: {
        category: 'Social',
        content: 'Nova notificação',
        recipientId: '1234',
      },
    });

    return notification;
  }
}
