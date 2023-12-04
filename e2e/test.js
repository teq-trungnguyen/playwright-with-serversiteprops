import { test as base, expect } from "@playwright/test";
import { createWorkerFixture } from "playwright-msw";

import handlers from "./handlers";

const test = base.extend({
  worker: createWorkerFixture(handlers),
});

export { test, expect };
