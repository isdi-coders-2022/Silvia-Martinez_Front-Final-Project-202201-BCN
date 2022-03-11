import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";
import CardProducto from "../CardProducto/CardProducto";

const ListProduct: StyledComponent<"ul", {}> = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  top: 100px;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

interface ProductListProps {
  products: Producto[];
}

const ProductList = ({ products }: ProductListProps): JSX.Element => {
  return (
    <>
      <ListProduct>
        {products.map((producto: Producto) => (
          <CardProducto key={producto._id} product={producto} />
        ))}
      </ListProduct>
    </>
  );
};

export default ProductList;
