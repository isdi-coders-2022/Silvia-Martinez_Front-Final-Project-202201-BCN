import { screen } from "@testing-library/react";
import { GetServerSidePropsContext } from "next";
import { act } from "react-dom/test-utils";
import renderWithProviders from "../../jest.setup";
import EditProduct, { getServerSideProps } from "../../pages/edit/[id]";
import { wrapper } from "../../redux/store";
import { ProductoLocation } from "../../types/ProductoLocation";

describe("Given an edit form page", () => {
  describe("When it is rendered wiht a product data", () => {
    test("Then it should render the product data in the input", async () => {
      const producto: ProductoLocation = {
        _id: "",
        category: "muebles",
        description: "silla de madera",
        picture: "unafoto.jpg",
        price: "14",
        title: "Silla",
        userID: {
          username: "",
          name: "Pepe",
          picture: "",
          _id: "",
          password: "",
          email: "",
        },
        adress: "",
      };

      renderWithProviders(<EditProduct product={producto} />);

      const inputDescription = screen.getByDisplayValue(producto.description);
      const inputPrice = screen.getByDisplayValue(producto.price);
      const inputTitle = screen.getByDisplayValue(producto.title);

      expect(inputDescription).toBeInTheDocument();
      expect(inputPrice).toBeInTheDocument();
      expect(inputTitle).toBeInTheDocument();
    });
  });
  test("Then it should render a edit form", async () => {
    const WrappedComponent = await wrapper.withRedux(EditProduct);

    const producto: ProductoLocation = {
      _id: "",
      category: "muebles",
      description: "silla de madera",
      picture: "unafoto.jpg",
      price: "14",
      title: "Silla",
      userID: {
        username: "",
        name: "Pepe",
        picture: "",
        _id: "",
        password: "",
        email: "",
      },
      adress: "",
    };

    const context = {
      props: { producto },
    };

    await act(async () => {
      await getServerSideProps(context as unknown as GetServerSidePropsContext);
    });

    renderWithProviders(<WrappedComponent />);

    const text = screen.getByText("Producto:");

    expect(text).toBeInTheDocument();
  });
});
