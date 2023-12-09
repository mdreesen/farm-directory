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
  product: any[];
  product_feed: string;
  type: string;
  user: IUser;
}

export interface Product {
  product_name: string;
  product_feed: any[];
  product_description: string;
  available: boolean;
  show: boolean;
}
