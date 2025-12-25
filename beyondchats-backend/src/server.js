const express = require("express");
const cors = require("cors");

const articleRoutes = require("./routes/articleRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/articles", articleRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀 Use /api/articles");
});

