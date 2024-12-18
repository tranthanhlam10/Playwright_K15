import { describe, expect, it, test } from "@jest/globals";
import BrandContribution from "../src/Page/BrandContribution";
import * as allure from "allure-js-commons";


const brandContribution = new BrandContribution();

// This file contains test (expected result + data test)
// Nghien cuu cach them hook cho test

describe("Chec API", () => {it("Brand Contribution status's check", async () => {
  await allure.epic("ECI");
  await allure.feature("Market Insights");
  await allure.suite("Brand Contribution");
  await allure.severity("critical");
  const status = (await brandContribution.brandContributionOnShoptye()).status;
  await allure.tags("Test1", "Check 1");

  expect(status).toBe(200);
});})

