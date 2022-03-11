import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            _id: "123",
            price: 10,
            title: "silla",
            description: "silla bonita",
            category: "mueble",
          },
        ])
      );
    }
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/user`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            _id: "123",
            price: 10,
            title: "silla",
            description: "silla bonita",
            category: "mueble",
          },
        ])
      );
    }
  ),
];
