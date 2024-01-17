const { google } = require("googleapis");
export default async function handler(req, res) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const { email } = req.body;
  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1gAfrrRwcJ-BE0NqVkUZ5FEQ0-XZKEDJ_6_4GtsMfO74";

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[email]],
    },
  });

  res.send("Successfully submitted! Thank you!");
}
