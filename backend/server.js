const express = require("express");
const app = express();
const notes = require("./data/notes.js");
const dotenv = require("dotenv");
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT);
