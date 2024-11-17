
import { describe, expect, it, test } from "@jest/globals";
import BrandContribution from "./BrandContribution";



const brandContribution = new BrandContribution();

// This file contains test (expected result + data test)
// Nghien cuu cach them hook cho test
test("First API test", async() => { 
  const status =  (await brandContribution.brandContributionOnShoptye()).status;
    expect(status).toBe(200);
});