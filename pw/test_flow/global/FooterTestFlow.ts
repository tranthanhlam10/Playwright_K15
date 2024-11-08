import { Page } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { FooterComponent } from "../../components/global/FooterComponent";
import { FooterColumnComponent } from "../../components/global/FooterColumnComponent";
import { deepStrictEqual } from "assert";

export class FooterTestFlow {
  constructor(private page: Page) {
    this.page = page;
  }

  async verifyFooterComp() {
    const homePage: HomePage = new HomePage(this.page);
    const footerComp: FooterComponent = homePage.footerComponent();
    await this.verifyInformationColumn(footerComp);
    await this.verifyCustomerServiceColumn(footerComp);
    await this.verifyMyAccountColumn(footerComp);
    await this.verifyFollowUsColumn(footerComp);
  }

  private async verifyInformationColumn(footerComp: FooterComponent) {
    const expectedLinkTest: string[] = [
      "Sitemap",
      "Shipping & Returns",
      "Privacy Notice",
      "Conditions of Use",
      "About us",
      "Contact us",
    ];
    const expectedHypeLinkTest: string[] = [
      "/sitemap",
      "/shipping-returns",
      "/privacy-policy",
      "/conditions-of-use",
      "/about-us",
      "/contactus",
    ];

    await this.verifyFooterColumn(
      footerComp.InformationColumnComponent(),
      expectedLinkTest,
      expectedHypeLinkTest
    );
  }
  private async verifyCustomerServiceColumn(footerComp: FooterComponent) {}
  private async verifyMyAccountColumn(footerComp: FooterComponent) {}
  private async verifyFollowUsColumn(footerCompo: FooterComponent) {}

  private async verifyFooterColumn(
    footerColumnComp: FooterColumnComponent,
    expectedLinkTest: string[],
    expectedHypeLinkTest: string[]
  ) {
    const actualLinkTest: string[] = [];
    const actualHypeLinkTest: string[] = [];
    const footerCompLinks = await footerColumnComp.links();
    for (let footerCompLink of footerCompLinks) {
      const footerLinkText = await footerCompLink.textContent();
      const footerHypeLinkTest = await footerCompLink.getAttribute("href");
      actualLinkTest.push(footerLinkText as string);
      actualHypeLinkTest.push(footerHypeLinkTest as string);
    }

    // Assert bằng module của NodeJs
    deepStrictEqual(
      actualLinkTest,
      expectedLinkTest,
      "actual link text is not the same"
    );
    deepStrictEqual(
      actualHypeLinkTest,
      expectedHypeLinkTest,
      "actual hype link text is not the same"
    );
  }
}
