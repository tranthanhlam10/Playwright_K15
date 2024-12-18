// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   reporters: [
//     "default",
//     "jest-allure-reporter", // Báo cáo Allure
//   ],
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Thiết lập Allure
//   globals: {
//     "ts-jest": {
//       tsconfig: "<rootDir>/tsconfig.json",
//     },
//   },
// };

// export default config;

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "allure-jest/node",
  reporters: [
    "default", // Báo cáo mặc định
    [
      "jest-allure",
      {
        outputDirectory: "allure-results", // Thư mục kết quả Allure
      },
    ],
  ],
  //setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Thiết lập thêm cho Allure
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
};

export default config;

