// Neu thay select thi le dropdown, con neu la div thi su ly phai khac 
import test from "@playwright/test";
import { log, profile } from "console";

// File pw/playwright.config.ts no se duoc config trong module @playwright/test, duoc dong goi bang test


// Neu thay select thi le dropdown, con neu la div thi su ly phai khac 
test("Handle Dropdown", async ({ page }) => {
  await page.goto("/dropdown");

  //Target the dropdown element
  const dropdownLocator = await page.locator('#dropdown');

  // Select Option 01 - Index
  await dropdownLocator.selectOption({index: 1});
  await page.waitForTimeout(1000);

  // Select Option 02 - Value
  await dropdownLocator.selectOption({ value: "2" });
  await page.waitForTimeout(1000);

  // Select Option 01 - Label/visible text
  await dropdownLocator.selectOption({ label: "Option 1" });
  await page.waitForTimeout(1000);
  
});

test("Handle Iframe", async ({ page }) => {
  await page.goto("/iframe");


  // CLose the alert popup about exceeding pracing plan
  await page.locator('div[role="alert"] button').click(); 


  //Target the dropdown element
  const iframeLocator = await page.locator('iframe[id^="mce"]');

  // Find element insside Iframe form the IframeLoactor
  const editTextArea = iframeLocator.locator("body p");
  await editTextArea.click();
  await editTextArea.clear();
  await editTextArea.fill("New Content");
 

}); 

test("Mouse Hover and narrow down searching scope", async ({ page }) => {
  await page.goto("/hovers");

  // Find all the figures

  const allFigureLocators = await page.locator('.figure').all();

  // Loop over all the figuresLocator, tim locator theo cap
  for(const figureLocator of allFigureLocators) {
    const imgLocator = figureLocator.locator('img');
    const usernameLocator = figureLocator.locator("h5");
    const profileHyperLinkLocator = figureLocator.locator("a");

    // Force thanh kieu any
    let usernameText : any = await usernameLocator.textContent(); 
    console.log(usernameText);
    

    // Neu khong co editable thi moi thay doi thuoc tinh cua no
    let isUsernameVisible = await usernameLocator.isVisible();
    let isProfileHyperlinkVisible = await profileHyperLinkLocator.isVisible();

    // Hien tai no hong co visable
    console.log(isUsernameVisible);
    console.log(isProfileHyperlinkVisible);

    // Mouse hover 
    await imgLocator.hover();
    await page.waitForTimeout(1000);
    isUsernameVisible = await usernameLocator.isVisible();
    isProfileHyperlinkVisible = await profileHyperLinkLocator.isVisible();

    // Kiem tra xem coi co visable hong
    console.log(isUsernameVisible);
    console.log(isProfileHyperlinkVisible);

  }
}); 

// Tim tu componet bu xuong de nhung locator con => Toi gian hoa cac selector
test.only("Checking element state and handle dynamic state", async ({ page }) => {
  // Check current state
  // Trigger
  // Wait expected state hand interact
  await page.goto("/dynamic_controls");

  // Locate 2 parent componets
  const checkboxComponent = await page.locator('#checkbox-example');
  const inputComponent = await page.locator('#input-example');


  // Interact checkbox element
  const checkboxLocator = checkboxComponent.locator('#checkbox input');
  let isCheckboxEnabled = await checkboxLocator.isEnabled();
  let isCheckboxSelected = await checkboxLocator.isChecked();
  console.log(isCheckboxEnabled);
  console.log(isCheckboxSelected);

  if (!isCheckboxSelected){
    await checkboxLocator.click();
  }

  await page.waitForTimeout(1000);

  const removeBtnLocator = await checkboxLocator.locator('button');
  await removeBtnLocator.click();
  // Cho tho thang checkbox bi xoa khong con nua
  await page.waitForSelector("#checkbox-example #checkbox input", { state: "hidden" });


  // Interact input example

});