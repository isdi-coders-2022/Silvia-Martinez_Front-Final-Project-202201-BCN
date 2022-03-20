import { Producto } from "./Producto";

export interface ProductoLocation extends Producto {
  location: {
    lat: string;
    long: string;
  };
}
