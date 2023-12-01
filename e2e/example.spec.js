// @ts-check
const { test, expect } = require("@playwright/test");

const mockFetchAnimals = async (page) => {
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
  await page.route(
    "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals",
    async (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(resBody),
      });
    }
  );
};

test.beforeEach(async ({ page }) => {
  await mockFetchAnimals(page);
});

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.waitForTimeout(2000);
  await expect(page.getByText("Cuu")).toBeVisible();
});
