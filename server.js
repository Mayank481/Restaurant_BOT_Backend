require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 8000;
const ConnetDatabase = require("./database");

ConnetDatabase();

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
