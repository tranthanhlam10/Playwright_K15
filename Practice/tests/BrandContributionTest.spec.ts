import { describe, expect, it, test } from "@jest/globals";
import BrandContribution from "../src/Page/BrandContribution";
import * as allure from "allure-js-commons";
import { matchers } from "jest-json-schema";
//expect.extend(matchers);

// Retry fail test case
jest.retryTimes(5, { logErrorsBeforeRetry: true });

const brandContribution = new BrandContribution();
const SECONDS = 1000;
jest.setTimeout(10 * SECONDS);


// This file contains test (expected result + data test)
// Nghien cuu cach them hook cho test

// describe("Brand Test", () => {
//   it("Brand Contribution on shoptype status's check", async () => {
//     await allure.epic("ECI");
//     await allure.feature("Market Insights");
//     await allure.suite("Brand Contribution");
//     await allure.severity("critical");
//     const status = (await brandContribution.brandContributionOnShoptye())
//       .status;
//     expect(status).toBe(200);
//   });
// });


describe("Brand Test", () => {
  const schema = {
    type: "object",
    properties: {
      id: {
        type: "number",
      },
      name: {
        type: "string",
      },
      total_brand_gmv: {
        type: "number",
      },
      share_of_gmv: {
        type: "number",
      },
      non_official_gmv: {
        type: "number",
      },
      share_of_non_official_gmv: {
        type: "number",
      },
      official_gmv: {
        type: "number",
      },
      share_of_official_gmv: {
        type: "number",
      },
    },
    required: [
      "id",
      "name",
      "total_brand_gmv",
      "share_of_gmv",
      "non_official_gmv",
      "share_of_non_official_gmv",
      "official_gmv",
      "share_of_official_gmv",
    ],
  };
  it("Brand Contribution on shoptype schema check", async () => {
    await allure.epic("ECI");
    await allure.feature("Market Insights");
    await allure.suite("Brand Contribution");
    await allure.severity("critical");
    const responseData = (await brandContribution.brandContributionOnShoptye()).data;

    console.log(responseData);

  });
});


// describe("Brand Test", () => {
//   it("Brand Contribution on shoptype check value of Brand", async () => {
//     await allure.epic("ECI");
//     await allure.feature("Market Insights");
//     await allure.suite("Brand Contribution");
//     await allure.severity("critical");
//     const status = (await brandContribution.brandContributionOnShoptye())
//       .status;
//     expect(status).toBe(200);
//   });
// });






