import API from "../../src/Core/API";
import APIcontroller from "../../src/Core/APIcontroller";
import Authorrization from "../../src/Core/Authorization";
import GGSheetHelper from "../Helper/readGoogleSheet";
import envconfig from "../../config";

export default class CategoryLandscape {
  async brandContributionOnShoptye() {
    const author = new Authorrization(
      envconfig.username,
      envconfig.password,
      envconfig.strategy
    );

    const token = await author.generateToken();
    console.log(token);

    const sheetHelper = new GGSheetHelper();
    const sheetData = await sheetHelper.readGoogleSheet();

    const params: object = {
      $comparing_period: sheetData["comparing_period"], // "week"
      $date_from: sheetData["date_from"], // "2024-03-10"
      industry_id: parseInt(sheetData["industry_id"]), // 1
      $count_field: sheetData["count_field"], // "sold"
      $brands: JSON.parse(sheetData["brands"]), // [37] (cần parse nếu là chuỗi JSON)
      $table_info: parseInt(sheetData["table_info"]), // 0
      $oversea: sheetData["oversea"] === "TRUE", // true
      $abnormal: sheetData["abnormal"] === "TRUE", // true
      $exclude_gift: sheetData["exclude_gift"] === "TRUE", // true
      $abnormal_by_rating_sold_threshold: parseInt(
        sheetData["abnormal_by_rating_sold_threshold"]
      ), // 3
    };

    console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/brand-comparison-on-shop-types",
      token,
      5325,
      params
    );

    const brandController = new APIcontroller();
    const jsonData = await brandController.getMethod(
      brandContributionAPI,
      token
    );

    return jsonData;
  }
}
