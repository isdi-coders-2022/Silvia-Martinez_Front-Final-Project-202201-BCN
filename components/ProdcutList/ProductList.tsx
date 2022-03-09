import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";
import CardProducto from "../CardProducto/CardProducto";

const ListProduct: StyledComponent<"ul", {}> = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;

interface ProductListProps {
  products: Producto[];
}

const ProductList = ({ products }: ProductListProps): JSX.Element => {
  return (
    <>
      <ListProduct>
        {products.map((producto: Producto) => (
          <CardProducto key={producto.title} product={producto} />
        ))}
      </ListProduct>
    </>
  );
};

export default ProductList;
