export class Notification {
  public id: string;
  public recipientId: string;
  public content: string;
  public category: string;
  public read_at: Date | null;
  public created_at: Date;
}
