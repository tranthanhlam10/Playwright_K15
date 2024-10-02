import test from "@playwright/test"


// File pw/playwright.config.ts no se duoc config trong module @playwright/test, duoc dong goi bang test

test("Link Text - XPATH", async({page}) => {
    await page.goto("/");

    //Find the footer link elm by XPATH
    const footerLink = page.locator('//a[contains(text(),"Elemental")]');
     // Tra ve 1 locator
    
     // Chi cho rieng element nay 15s
     const footerLink1 = await page.waitForSelector('//a[contains(text(),"Elemental")]', {timeout: 15000});

    // Click on the click 
    // Neu param ma co dau ? thi optional, co cung duoc hoac khong co cung duoc
    await footerLink.click();

    // Neu no tra ve promise thi phai co await
    await footerLink1.click();  
    
    // Debug PURPOSE ONLY
    await page.waitForTimeout(3000);
})


// test.only => Chi chay 1 test trong 1 spec
test("Link Text - CSS", async ({ page }) => {
  await page.goto("/");

  //Find the footer link elm by CSS
  const footerLink = page.locator('a:has-text("Elemental")');
  // Tra ve 1 locator


  // Click on the click
  // Neu param ma co dau ? thi optional, co cung duoc hoac khong co cung duoc
  await footerLink.click();

  // Debug PURPOSE ONLY
  await page.waitForTimeout(3000);
});


test("Link Text - Filtering", async ({ page }) => {
  await page.goto("/");

  //Filter trong truong hop match nhieu locator
  page.locator("a").filter({ hasText: "Form Authentication" }).click();
  

  // Debug PURPOSE ONLY
  await page.waitForTimeout(3000);
});


test.only("From Authen", async ({ page }) => {
  await page.goto("/login");
  // Form interaction
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
    await page.locator('button[type="submit"]').click(); 

  // Get text from Dashboard
  const dashboard = await page.locator("h2").textContent();
  console.log(dashboard);   
  
  const dashboard1 = await page.locator("h2").innerText();
  console.log(dashboard1);   

  // Debug PURPOSE ONLY
  await page.waitForTimeout(3000);
});



// test_id => custom attribute => Chi dung de tim kiem element de chay test
// Khi nao dung cai nay => Du an duoc coi torng ve automation test => tao PR luon de config