import API from "./API";
import APIcontroller from "./APIcontroller";


const params = {
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
  "https://api-staging-eca.younetmedia.com/eca/dashboards/",
  "brand-comparison-on-shop-types", params
);

const brandController = new APIcontroller();
brandController.getReponse(brandContributionAPI);