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
  description: string;
  status: AuctionStatus;
  rate: number;
  mainImage: string;
  createdAt: Date;
}

export interface Rate extends Entity {
  rateOwner: string;
  rate: number;
  createdAt: Date;
}
