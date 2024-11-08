import {Page} from "@playwright/test";
import HeaderComponent from "../components/global/HeaderComponent";
import { PageBodyComponent } from "../components/PageBodyComponent";
import { FooterComponent } from "../components/global/FooterComponent";

export  class HomePage {
  constructor(private page: Page) {
    this.page = page;
  }

  headerComponent(): HeaderComponent {
    return new HeaderComponent(this.page.locator(HeaderComponent.selector));
  }

  // Cho nay la cho tricky hoi nay
  pageBodyComponent(): PageBodyComponent {
    return new PageBodyComponent(this.page.locator(PageBodyComponent.selector));
  }

  footerComponent(): FooterComponent {
    return new FooterComponent(this.page.locator(FooterComponent.selector));
  };
}