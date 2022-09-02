const express = require("express");
const app = express();
const notes = require("./data/notes.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
