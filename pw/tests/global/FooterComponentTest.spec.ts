import test from "@playwright/test";
import { FooterTestFlow } from "../../test_flow/global/FooterTestFlow";

const PAGES = [
  {
    pageName: "HomePage",
    slug: "/",
  },
  {
    pageName: "LoginPage",
    slug: "/login",
  },
  {
    pageName: "RegisterPage",
    slug: "/register",
  }
];

PAGES.forEach(pages => {
    //const {pageName,slug} = pages;  // Cú pháp phân rã 
    //Còn cách code dứoi là cách bình thường nếu khôgn dùng phân rã
    test(`Test footer component on ${pages.pageName}`, async ({ page }) => {
        await page.goto(pages.slug);
        const footerTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComp();
    });
})   
