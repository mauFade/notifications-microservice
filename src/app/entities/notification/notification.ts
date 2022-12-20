interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  read_at?: Date | null;
  created_at: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(notificationProps: NotificationProps) {
    this.props = notificationProps;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content(): string {
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
