import { describe, expect, it, test } from "@jest/globals";
import BrandContribution from "../src/Page/BrandContribution";
import * as allure from "allure-js-commons";
import { matchers } from "jest-json-schema";
expect.extend(matchers);
import Ajv from "ajv";
import addFormats from "ajv-formats";

// Retry fail test case
jest.retryTimes(3, { logErrorsBeforeRetry: true });

const brandContribution = new BrandContribution();
const SECONDS = 1000;
jest.setTimeout(10 * SECONDS);


const ajv = new Ajv();
addFormats(ajv);



// beforeAll(() => {
//   console.log("Test Brand Contribution");
// })


// afterAll(() => {
//   console.log("Finish");
// })  

//This file contains test (expected result + data test)
//Nghien cuu cach them hook cho test


// Sử dụng data provider để pass data vào
// www.npmjs.com/package/test-data-provider
// Lưu các test case thành 1 mảng object -> có thêm description của test cases nữa
// từ đó paste vào test case

describe("Brand Test", () => {
  it("Brand Contribution on shoptype status's check", async () => {
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
  const schema = {
    items: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          name: {
            type: "string",
          },
          total_brand_sold: {
            type: "integer",
          },
          share_of_sold: {
            type: "integer",
          },
          non_official_sold: {
            type: "integer",
          },
          share_of_non_official_sold: {
            type: "integer",
          },
        },
        required: [
          "id",
          "name",
          "total_brand_sold",
          "share_of_sold",
          "non_official_sold",
          "share_of_non_official_sold",
        ],
      },
    ],
  };
    
  it("Brand Contribution on shoptype schema check", async () => {
    await allure.epic("ECI");
    await allure.feature("Market Insights");
    await allure.suite("Brand Contribution");
    await allure.severity("critical");
    const responseData = (await brandContribution.brandContributionOnShoptye());
    const validate = ajv.compile(schema);
    const isValid = validate(responseData.data);

    //console.log(responseData.data);
    //console.log(isValid);
    //console.log(validate);


    expect(isValid).toBe(true);
    if (!isValid) console.log(validate.errors);
  });
});







