import { google } from "googleapis";
import { JWT } from "google-auth-library";
import * as fs from "fs";
import * as readline from "readline";
import * as path from "path";



const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
//const TOKEN_PATH = `token.json`; // Lưu token để không cần xác thực lại

const TOKEN_PATH = path.join(__dirname, `token.json`);

async function authorize(credentials: any): Promise<any> {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Kiểm tra xem đã lưu token chưa
  if (fs.existsSync(TOKEN_PATH)) {
    const token = fs.readFileSync(TOKEN_PATH, "utf8");
    oAuth2Client.setCredentials(JSON.parse(token));
    return oAuth2Client;
  }

  return getNewToken(oAuth2Client);
}


async function getNewToken(oAuth2Client: any): Promise<any> {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log("Authorize this app by visiting this URL:", authUrl);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const code = await new Promise<string>((resolve) => {
      rl.question("Enter the code from that page here: ", (code) => {
        rl.close();
        resolve(code);
      });
    });

    try {
      const { tokens } = await oAuth2Client.getToken(code);
      oAuth2Client.setCredentials(tokens);

      // Lưu token vào file
      const dir = path.dirname(TOKEN_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      await fs.promises.writeFile(TOKEN_PATH, JSON.stringify(tokens), "utf8");
      console.log("Token stored to", TOKEN_PATH);
      return oAuth2Client;
    } catch (err) {
      console.error(
        "Error retrieving access token:",
        err.response?.data || err
      );
      throw err;
    }
}


async function saveToken(token: any): Promise<void> {
  try {
    await fs.promises.writeFile(TOKEN_PATH, JSON.stringify(token), "utf8");
    console.log("Token saved to", TOKEN_PATH);
  } catch (err) {
    console.error("Error saving the token file:", err);
  }
}

async function readToken(): Promise<any | null> {
  try {
    const data = await fs.promises.readFile(TOKEN_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading the token file:", err);
    return null;
  }
}



async function readGoogleSheet() {
  try {
    // Đọc file credentials.json
    const credentials = JSON.parse(
      fs.readFileSync("Practice/credentials.json", "utf8")
    );
    const auth = await authorize(credentials);

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "1R7uPDZJz9lcrZUtbo-_CN7QnJ8AYtWx8y7EX60qK9l0"; // Thay ID Google Sheet của bạn
    const range = "Brand API!A2:J2"; // Thay phạm vi dữ liệu bạn muốn đọc

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    console.log("Data from Google Sheet:", response.data.values);
  } catch (error) {
    console.error("Error reading Google Sheet:", error.message);
  }
}

// Call the function
readGoogleSheet();
