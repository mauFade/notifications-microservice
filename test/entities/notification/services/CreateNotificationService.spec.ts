import { randomUUID } from 'crypto';
import { CreateNotificationService } from '../../../../src/app/entities/notification/services/CreateNotificationService';
import { Content } from '../../../../src/app/entities/content/content';

let createNotificationService: CreateNotificationService;
describe('CreateNotificationService', () => {
  beforeEach(async () => {
    createNotificationService = new CreateNotificationService();
  });

  test('It should resolve notifications service', () => {
    const newNotification = createNotificationService.execute({
      category: 'Testes',
      content: 'Testing',
      recipientId: randomUUID(),
    });

    expect(newNotification).toBeTruthy();
    expect(newNotification.content).toBeInstanceOf(Content);
  });
});
