import dotenv from "dotenv";


dotenv.config();

interface Config {
  username: string;
  password: string;
  strategy: string;
}

const envconfig = {
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || "",
  strategy: process.env.STRATEGY || "default",
};

export default envconfig; 