import { User } from "./User";

export interface Producto {
  _id: string;
  price: string;
  title: string;
  description: string;
  category: string;
  picture: string;
  userID: User;
}
