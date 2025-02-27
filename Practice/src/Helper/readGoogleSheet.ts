// import { google } from "googleapis";
import * as fs from "fs";
import * as path from "path";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

export default class GGSheetHelper {
  readonly SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

  async authorize(credentials: any): Promise<any> {
    const auth = new google.auth.GoogleAuth({
      credentials: credentials, 
      scopes: this.SCOPES,
    });

    try {
      const client = await auth.getClient();
      return client;
    } catch (err) {
      console.error("Error authorizing client:", err);
      throw new Error("Failed to authorize client");
    }
  }



// export default class GGSheetHelper {
//   private readonly SCOPES = [
//     "https://www.googleapis.com/auth/spreadsheets.readonly",
//   ];
//   private authClient: JWT | null = null; // Cache client để tái sử dụng

//   async authorize(credentials: any): Promise<JWT> {
//     if (!credentials || !credentials.client_email || !credentials.private_key) {
//       throw new Error(
//         "Invalid credentials: Missing client_email or private_key"
//       );
//     }

//     if (this.authClient) {
//       return this.authClient; // Trả về client đã cache nếu đã xác thực trước đó
//     }

//     try {
//       const auth = new google.auth.JWT({
//         email: credentials.client_email,
//         key: credentials.private_key,
//         scopes: this.SCOPES,
//       });

//       await auth.authorize(); // Kiểm tra xem xác thực có thành công không
//       this.authClient = auth;
//       return auth;
//     } catch (err) {
//       console.error("Error authorizing client:", err);
//       throw new Error("Failed to authorize client");
//     }
//   }

  async readGoogleSheet() {
    try {
      const credentialsPath = path.resolve(__dirname, "service-account.json");
      console.log(credentialsPath); // Chỗ này nên console log ra xem đường dẫn đến file root có chính xác hay không
      // Luyện thêm cách đọc file json/txt
      if (!fs.existsSync(credentialsPath)) {
        throw new Error(`Credentials file not found at ${credentialsPath}`);
      }
      const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));
      const auth = await this.authorize(credentials);

      const sheets = google.sheets({ version: "v4", auth });
      const spreadsheetId = "1R7uPDZJz9lcrZUtbo-_CN7QnJ8AYtWx8y7EX60qK9l0";
      const range = "Brand API!A1:J2";

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      const rows = response.data.values || [];
      if (rows.length < 2) {
        throw new Error("Google Sheet is empty or invalid data");
      }

      const [headers, data] = rows;
      const result: Record<string, any> = {};
      headers.forEach((header, index) => {
        result[header] = data[index];
      });

      console.log("Data from Google Sheet:", result);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        // Nếu là Error object, log message và stack
        console.error("Error reading Google Sheet:", error.message);
        console.error("Stack trace:", error.stack);
      } else {
        // Nếu lỗi không phải là Error object, log toàn bộ đối tượng lỗi
        console.error("Unknown error:", error);
      }
      throw error;
    }
  }
}
