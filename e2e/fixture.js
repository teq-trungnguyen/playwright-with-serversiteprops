// tests/fixture.ts
import { test as base } from "@playwright/test";
import { rest } from "msw";

const test = base.extend({
  requestInterceptor: [
    async ({}, use) => {
      await use(
        (() => {
          const { setupServer } = require("msw/node");
          const requestInterceptor = setupServer();

          requestInterceptor.listen({
            onUnhandledRequest: "bypass",
          });

          return requestInterceptor;
        })()
      );
    },
    {
      scope: "worker",
    },
  ],
  rest,
});

export default test;
