module.exports = {
  preset: "ts-jest", // Cấu hình Jest sử dụng ts-jest
  testEnvironment: "node", // Sử dụng môi trường Node.js
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Biến tất cả file .ts và .tsx thành mã JavaScript
  },
  moduleFileExtensions: ["ts", "tsx", "js"], // Cấu hình các file extensions mà Jest sẽ nhận diện
  testMatch: [
    "**/?(*.)+(spec|test).ts", // Tìm kiếm các file test với đuôi .ts
  ],
  globals: {
    "ts-jest": {
      isolatedModules: true, // Tăng hiệu suất khi sử dụng Jest với TypeScript
    },
  },
  setupFiles: ["dotenv/config"], // Nếu bạn cần sử dụng các biến môi trường (nếu có)

  // reporters: [
  //   "default", // Báo cáo mặc định của Jest
  //   [
  //     "jest-allure-reporter",
  //     {
  //       resultsDir: "allure-results", // Thư mục lưu kết quả của Allure
  //     },
  //   ],
  // ],
};
