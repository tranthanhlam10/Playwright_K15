import path from "path";
import API from "../../src/Core/API";
import APIcontroller from "../../src/Core/APIcontroller";
import Authorrization from "../../src/Core/Authorization";
import GGSheetHelper from "../Helper/readGoogleSheet";
import readJsonFile from "../Helper/readJsonFile";
import { console } from "inspector";
import AccountSevice from "../Helper/AccountService";


export default class BrandContribution {
  //shoptype
  async brandContributionOnShoptye() {


    const account = new AccountSevice();
    const login: Account | undefined = await account.initAccount("Market Insight");

   

    const author = new Authorrization(
      login!.email,
      login!.password,
      login!.strategy
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
      ),
    };

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

  //platform
  async brandContributionOnPlatform() {
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
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
      ), 
    };

    //console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/brand-comparison-on-platforms",
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

  //overview
  async brandContributionOverview() {
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
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
      $oversea: sheetData["oversea"] === "TRUE", // true
      $abnormal: sheetData["abnormal"] === "TRUE", // true
      $exclude_gift: sheetData["exclude_gift"] === "TRUE", // true
      $abnormal_by_rating_sold_threshold: parseInt(
        sheetData["abnormal_by_rating_sold_threshold"]
      ), // 3
    };

    console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/brands-overview",
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

  // Price piano
  async brandContributionPiano() {
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
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
      $oversea: sheetData["oversea"] === "TRUE", // true
      $abnormal: sheetData["abnormal"] === "TRUE", // true
      $exclude_gift: sheetData["exclude_gift"] === "TRUE", // true
      $abnormal_by_rating_sold_threshold: parseInt(
        sheetData["abnormal_by_rating_sold_threshold"]
      ), // 3
      $type: sheetData["type"],
    };

    console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/price-piano",
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

  //Top store summary
  async brandContributionStoreSummary() {
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
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
      $oversea: sheetData["oversea"] === "TRUE", // true
      $abnormal: sheetData["abnormal"] === "TRUE", // true
      $exclude_gift: sheetData["exclude_gift"] === "TRUE", // true
      $abnormal_by_rating_sold_threshold: parseInt(
        sheetData["abnormal_by_rating_sold_threshold"]
      ), // 3
    };

    console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/top-stores-summary",
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

  //Top store contribution
  async brandContributionStoreContribution() {
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
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
      $oversea: sheetData["oversea"] === "TRUE", // true
      $abnormal: sheetData["abnormal"] === "TRUE", // true
      $exclude_gift: sheetData["exclude_gift"] === "TRUE", // true
      $abnormal_by_rating_sold_threshold: parseInt(
        sheetData["abnormal_by_rating_sold_threshold"]
      ), // 3
      $limit: 60,
      $sort_type: "desc",
    };

    console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/top-stores-contribution",
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

  //Top model
  async brandContributionTopModel() {
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
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
      $oversea: sheetData["oversea"] === "TRUE", // true
      $abnormal: sheetData["abnormal"] === "TRUE", // true
      $exclude_gift: sheetData["exclude_gift"] === "TRUE", // true
      $abnormal_by_rating_sold_threshold: parseInt(
        sheetData["abnormal_by_rating_sold_threshold"]
      ), // 3
      $limit: 60,
      $sort_type: "desc",
      $table_info: 1,
      $sub_facet_field: "source_id",
    };

    console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/top-models-in-industry",
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

  //Top product
  async brandContributionTopProduct() {
    const author = new Authorrization(
      "lamtt@younetgroup.com",
      "Lam@12345",
      "local"
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
      $oversea: sheetData["oversea"] === "TRUE", // true
      $abnormal: sheetData["abnormal"] === "TRUE", // true
      $exclude_gift: sheetData["exclude_gift"] === "TRUE", // true
      $abnormal_by_rating_sold_threshold: parseInt(
        sheetData["abnormal_by_rating_sold_threshold"]
      ), // 3
      $limit: 60,
      $sort_type: "desc",
      $table_info: 1,
      $sub_facet_field: "source_id",
    };

    console.log("Params:", params);

    const brandContributionAPI = new API(
      "eca/dashboards/top-products-contribution",
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
