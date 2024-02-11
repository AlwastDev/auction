export enum AuctionStatus {
  CREATED = 0,
  PROCESSING = 1,
  FINISHED = 2,
}

export interface Entity {
  id: string;
}

export interface User extends Entity {
  id: string;
  login: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Auction extends Entity {
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

export interface Rate extends Entity {
  userId: string;
  rate: number;
  createdAt: Date;
}

export interface Image extends Entity {
  source: string;
}
