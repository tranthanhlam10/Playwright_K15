import test from "@playwright/test";
import HomePage from "../../pages/HomePage";

test.only("Test Base Component", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  // Rang co gang hieu cho nay
  const homePage = new HomePage(page);
  const footerComp = homePage.footerComponent();
  const informationComp = footerComp.InformationColumnComponent();

  const columnTitle = await informationComp.title().textContent();
  const columnLinks = await informationComp.links();

  for(let link of columnLinks) {
    const linkText = await link.textContent();
    console.log(linkText);

  }

  await page.waitForTimeout(2000);
});
