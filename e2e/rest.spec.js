import { rest } from "msw";
import { expect, test } from "./test";

test.describe.parallel("A demo of playwright-msw's functionality", () => {
  test("should use the default handlers without requiring handlers to be specified on a per-test basis", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await expect(page.locator('text="Trung"')).toBeVisible();
  });

  test.only("should allow mocks to be overridden on a per test basis", async ({
    page,
    worker,
  }) => {
    await worker.use(
      rest.get(
        "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals",
        (_, response, context) =>
          response(context.delay(250), context.status(200))
      )
    );
    await page.goto("http://localhost:3000/");
    await page.waitForTimeout(5000);
  });
});
