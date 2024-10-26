const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use("/api/items", itemRoutes);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
