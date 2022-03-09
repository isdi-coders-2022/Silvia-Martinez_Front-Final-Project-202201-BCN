import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
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
