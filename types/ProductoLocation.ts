import { Producto } from "./Producto";

export interface ProductoLocation extends Producto {
  adress: string;
  location: {
    lat: string;
    long: string;
  };
}
