const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const authRoutes = require("./routes/Auth.routes");
const entryRoutes = require("./routes/Entry.route");
const dashboardRoutes = require("./routes/Dashboard.routes");
const errorMiddleware = require("./middleware/error.middleware");

let app = express();
app.set("view engine", "ejs");
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieparser());

app.use("/api/auth", authRoutes);
app.use("/api/entry", entryRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(errorMiddleware);

module.exports = app;
