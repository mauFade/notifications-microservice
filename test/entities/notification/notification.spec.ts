import { Content } from '../../../src/app/entities/content/content';
import { Notification } from '../../../src/app/entities/notification/database/entitites/notification';
import { randomUUID } from 'crypto';

describe('Notification tests', () => {
  test('It should create a notification', () => {
    const notification = new Notification({
      category: 'Social',
      content: new Content('Uma nova solicitação de amizade!'),
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
    expect(notification.category).toEqual('Social');
  });
});
