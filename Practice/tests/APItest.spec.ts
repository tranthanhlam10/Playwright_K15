import { describe, expect, it, test } from "@jest/globals";
import BrandContribution from "../src/Page/BrandContribution";
import * as allure from "allure-js-commons";

const brandContribution = new BrandContribution();
const SECONDS = 1000;
jest.setTimeout(10 * SECONDS);

// This file contains test (expected result + data test)
// Nghien cuu cach them hook cho test

describe("Brand Test", () => {
  it("Brand Contribution status's check", async () => {
    await allure.epic("ECI");
    await allure.feature("Market Insights");
    await allure.suite("Brand Contribution");
    await allure.severity("critical");
    const status = (await brandContribution.brandContributionOnShoptye())
      .status;

    expect(status).toBe(200);
  });
});

describe("Brand Test", () => {
  it("Brand Contribution schema check", async () => {
    await allure.epic("ECI");
    await allure.feature("Market Insights");
    await allure.suite("Brand Contribution");
    await allure.severity("critical");
    const status = (await brandContribution.brandContributionOnShoptye())
      .status;

    expect(status).toBe(200);
  });
});
