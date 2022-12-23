export interface INotification {
  id: string;
  recipientId: string;
  content: string;
  category: string;
  read_at?: Date | null;
  created_at: Date;
}
