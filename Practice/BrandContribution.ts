import API from "./API";
import APIcontroller from "./APIcontroller";
import Authorrization from "./Authorization";


export default class BrandContribution {

  async brandContributionOnShoptye(){
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
    );

    const token = await author.generateToken();

    console.log(token);

    const params: object = {
      $comparing_period: "week",
      $date_from: "2024-03-10",
      industry_id: 1,
      $count_field: "sold",
      $brands: [37],
      $table_info: 0,
      $oversea: true,
      $abnormal: true,
      $exclude_gift: true,
      $abnormal_by_rating_sold_threshold: 3,
    };

    const brandContributionAPI = new API(
      "eca/dashboards/brand-comparison-on-shop-types",
      token,
      5325,
      params
    );

    const brandController = new APIcontroller();
    const jsonData = await brandController.getMethod(brandContributionAPI, token);

    return jsonData;    
  }
}
