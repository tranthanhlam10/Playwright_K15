import dotenv from "dotenv";


dotenv.config();



interface Config {
  BASE_URI: string;
}

const envconfig = {
  base_URI: process.env.BASE_URI || ""
};

export default envconfig; 

