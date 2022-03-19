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
  rest.put(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/123`,
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
  rest.post(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}user/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          _id: "",
          name: "Pepe",
          username: "Pepito",
          email: "pepe@pepe.com",
          password: "1234",
          picture: "",
        })
      );
    }
  ),
  rest.post(`${process.env.NEXT_PUBLIC_WALLAPLOP}user/login`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      })
    )
  ),
  rest.get(`${process.env.NEXT_PUBLIC_WALLAPLOP}user/user`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        _id: "",
        name: "",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      })
    )
  ),
];
