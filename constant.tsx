export const DEV_URL = "http://localhost:3000";

export interface chatLogsStateProps {
  messages: {
    id: string;
    createdAt: Date;
    message: string;
    senderId: string;
  }[];
  id: string;
  productId: string;
  buyerId: string;
  sellerId: string;
  updatedAt: Date;
}

export interface productProps {
  productId: string;
  title: string;
  basePrice: number;
  balance: number;
  description: string;
  images: string[];
}
