const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const allroutes = require("./ROUTES/routes")

app.use('/weeb', allroutes);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
})
