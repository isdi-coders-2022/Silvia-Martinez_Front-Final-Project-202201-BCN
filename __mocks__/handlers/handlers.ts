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
  rest.delete(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/33`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({}))
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/create`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json([
          {
            _id: "123",
            price: 10,
            title: "silla",
            description: "silla bonita",
            category: "mueble",
            location: {
              lat: 22222,
              long: 44444,
            },
          },
        ])
      );
    }
  ),
];
