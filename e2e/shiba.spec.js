import { test, expect, http } from "next/experimental/testmode/playwright/msw";

// test.use({
//   mswHandlers: [
//     http.get('http://my-db/product/shoe', (req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json({
//           title: 'A shoe',
//         })
//       )
//     }),
//   ],
// })

test("Hay trao cho anh", async ({ page, msw }) => {
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
  msw.use(
    http.get(
      "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals",
      (req, res, ctx) => {
        return res.once(ctx.status(200), ctx.json(resBody));
      }
    )
  );

  await page.goto("http://localhost:3000/");
  await page.waitForTimeout(5000);
});
