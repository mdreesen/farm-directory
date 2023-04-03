export interface IUser {
  Farm_location: string;
  email: string;
  farm_name: string;
  id: string;
  name: string;
  phone: string;
  picture: string;
  website: string;
}

export interface IFarmer {
  _id: string;
  likes: any[];
  postedAt: number;
  product: string;
  product_feed: string;
  type: string;
  user: IUser;
}
