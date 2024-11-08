import test from "@playwright/test";
import HomePage from "../../pages/HomePage";


test("Test List of ProductItem Components", async ({ page }) => {

 
   await page.goto("https://demowebshop.tricentis.com/");
   

   const homePage = new HomePage(page);
   const pageBodyComponent = homePage.pageBodyComponent();
   const productItemComponentList = await pageBodyComponent.productItemComponentList();

   for(let productItemComp of productItemComponentList){
      const productTitle = await productItemComp.productTitleLoc().textContent();
      const productPrice = await productItemComp
        .productPriceLoc()
        .textContent();
         console.log(`${productTitle}  :` +  `${productPrice}`);
   }  

   await page.waitForTimeout(2000);
});




