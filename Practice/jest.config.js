module.exports = {
  preset: "ts-jest", // Sử dụng ts-jest để hỗ trợ TypeScript
  testEnvironment: "node", // Môi trường chạy test
  testMatch: ["**/*.spec.ts", "**/*.test.ts"], // Các tệp test
  moduleFileExtensions: ["ts", "js"], // Các phần mở rộng được hỗ trợ
};
