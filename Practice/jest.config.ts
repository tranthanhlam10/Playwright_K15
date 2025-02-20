import type { Config } from "@jest/types";
import "jest-json-schema";

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
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },

    setupFilesAfterEnv: ["./jest.setup.ts"],
  },
};

export default config;
