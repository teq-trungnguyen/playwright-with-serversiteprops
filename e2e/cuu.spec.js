// import { expect } from "@playwright/test";
import test from "./fixture";

test("Bulbasaur", async ({ page, rest, requestInterceptor }) => {
  const resBody = [
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
  ];
  requestInterceptor.use(
    rest.get(
      "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals",
      (req, res, ctx) => res(ctx.json(resBody))
    )
  );
  await page.goto("http://localhost:3000/");
  await page.waitForTimeout(5000);
});
