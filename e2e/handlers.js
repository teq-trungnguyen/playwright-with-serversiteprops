import { rest } from "msw";

/** A collection of handlers to be used by default for all tests. */
const handler = [
  rest.get(
    "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals",
    (_, response, context) =>
      response(
        context.delay(500),
        context.status(200),
        context.json([
          {
            src: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg",
            content: "Cuu",
          },
          {
            src: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg",
            content: "Toy",
          },
          {
            src: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg",
            content: "Voi",
          },
        ])
      )
  ),
];
export default handler;
