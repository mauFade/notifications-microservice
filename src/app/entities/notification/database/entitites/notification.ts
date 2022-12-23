import { Replace } from '../../../../../utils/replace';
import { Content } from '../../../content/content';
import { INotification } from '../../dtos/notification';

interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  read_at?: Date | null;
  created_at: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(
    notificationProps: Replace<NotificationProps, { created_at?: Date }>,
  ) {
    this.props = {
      ...notificationProps,
      created_at: notificationProps.created_at ?? new Date(),
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set read_at(read_at: Date) {
    this.props.read_at = read_at;
  }

  public get read_at(): Date {
    return this.props.read_at;
  }
}

export abstract class INotificationRepository {
  abstract create(data: Notification): Promise<INotification>;
}
