import dotenv from "dotenv";


dotenv.config();

interface Config {
  username: string;
  password: string;
  strategy: string;
  BASE_URL: string;
}

const envconfig = {
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || "",
  strategy: process.env.STRATEGY || "default",
  base_URI: process.env.BASE_URL || ""
};

export default envconfig; 