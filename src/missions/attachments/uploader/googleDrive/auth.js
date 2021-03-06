const { google } = require("googleapis");
const credentials = require("../../../../../credentials.json");
const auth = new google.auth.GoogleAuth({
	scopes: ["https://www.googleapis.com/auth/drive"],
}).fromJSON(credentials);

module.exports = auth;
