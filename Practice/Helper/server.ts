const express = require("express");
const app = express();
const port = 3000;

app.get("/oauth2callback", (req, res) => {
  const code = req.query.code;
  if (code) {
    console.log("Authorization code:", code);
    res.send("Authorization successful! You can close this tab.");
  } else {
    res.send("No authorization code received.");
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
