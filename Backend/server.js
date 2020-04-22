const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contact = require("./routes/contact");
const connectDB = require("./config/db");

//load the env

dotenv.config({ path: "./config/config.env" });

//connect the database
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/contacts", contact);

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
