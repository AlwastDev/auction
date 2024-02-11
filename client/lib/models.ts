export enum AuctionStatus {
  CREATED = 0,
  PROCESSING = 1,
  FINISHED = 2,
}

export interface User {
  id: string;
  login: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Auction {
  id: string;
  status: AuctionStatus;
  userId: string;
  description: string;
  userIsOwner: boolean;

  lastRate: Rate;
  rates: Rate[];

  mainImage: Image;
  images: Image[];

  createdAt: Date;
}

export interface Rate {
  id: string;
  userId: string;
  rate: number;
  createdAt: Date;
}

export interface Image {
  id?: string;
  source: string;
}
