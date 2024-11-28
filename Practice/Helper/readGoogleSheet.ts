import { google } from "googleapis";
import { JWT } from "google-auth-library";
import * as fs from "fs";
import * as readline from "readline";
import * as path from "path";



const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const TOKEN_PATH = path.join(__dirname, "Practice/Helper/token.json"); // Lưu token để không cần xác thực lại

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


function getNewToken(oAuth2Client: any): Promise<any> {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this URL:", authUrl);

  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter the code from that page here: ", (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return reject("Error retrieving access token: " + err);
        oAuth2Client.setCredentials(token);

        // Lưu token để sử dụng lại
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
        console.log("Token stored to", TOKEN_PATH);
        resolve(oAuth2Client);
      });
    });
  });
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
    const range = "A100:J100"; // Thay phạm vi dữ liệu bạn muốn đọc

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
