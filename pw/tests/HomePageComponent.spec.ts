import test from "@playwright/test";
import HomePage from "../pages/HomePage";


test.only("Test Header Component", async ({ page }) => {

 
   await page.goto("https://demowebshop.tricentis.com/");
   // Rang co gang hieu cho nay
   const homePage = new HomePage(page);
   const headerComp = homePage.headerComponent();
   await headerComp.headerLogo().click();    

   await page.waitForTimeout(2000);
});
