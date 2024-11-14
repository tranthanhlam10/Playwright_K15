import API from "./API";
import APIcontroller from "./APIcontroller";
import Authorrization from "./Authorization";


async function main() {
  const author = new Authorrization(
    "lamtt@younetgroup.com",
    "Lam@12345",
    "local"
  );

  // Sử dụng `await` để đảm bảo `generateToken()` hoàn tất trước khi tiếp tục
  const token = await author.generateToken();

  const params : object = {
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
    "brand-comparison-on-shop-types",
    token, // token bây giờ đã có giá trị
    5325,
    params
  );

  const brandController = new APIcontroller();
  await brandController.getMethod(brandContributionAPI, token); // Gọi API với token hợp lệ
}


main().catch(console.error);
