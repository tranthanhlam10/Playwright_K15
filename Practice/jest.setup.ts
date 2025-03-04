import "jest-extended"; // Nếu dùng thư viện hỗ trợ Jest matchers
import "@testing-library/jest-dom"; // Nếu dùng React Testing Library

// Nếu cần matchers cho JSON schema
import { matchers } from "jest-json-schema";
expect.extend(matchers);

