// backend/server.js
const express = require("express");
const fetch = require("node-fetch");
const dotenv=require("dotenv"); 
const cors=require("cors");

dotenv.config();

const app = express();
app.use(cors());


app.get("/api/news", async (req, res) => {
  const { category = 'general', country = 'us', page = 1, pageSize = 8 } = req.query;

  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
