import { describe, expect, it, test } from "@jest/globals";
import BrandContribution from "../src/Page/BrandContribution";
import * as allure from "allure-js-commons";



const brandContribution = new BrandContribution();

// This file contains test (expected result + data test)
// Nghien cuu cach them hook cho test
test("First API test", async () => {

  const status = (await brandContribution.brandContributionOnShoptye()).status;
  await allure.tags("Test1", "Check 1");
  expect(status).toBe(200);

});
