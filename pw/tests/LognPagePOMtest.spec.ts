import test from "@playwright/test";
import LoginPage01 from "../pages/Login/LoginPageMethod01";
import LoginPage02 from "../pages/Login/LoginPageMethod02";

test('Test POM method 01', async ({page}) => {
    //Viet Code cung nhu viet van
    await page.goto("/login");

    const loginPage = new LoginPage01(page);
    await loginPage.inputUsername("tomsmith");
    await loginPage.inputPassword("SuperSecretPassword!");
    await loginPage.clickBtnLogin();
    
    await page.waitForTimeout(3000);
});


test("Test POM method 02", async ({ page }) => {
  //Viet Code cung nhu viet van
  await page.goto("/login");

  const loginPage = new LoginPage02(page);
  await loginPage.username().fill("tomsmith");
  await loginPage.password().fill("SuperSecretPassword!");
  await loginPage.BtnLogin().click();

  await page.waitForTimeout(3000);
});


