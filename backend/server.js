const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const NEWS_API_KEY = 'af2f2d55ff8b49ac8d74484dd4611c50';

app.use(cors());

app.get('/api/stock-news', async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=stock%20market&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch stock market news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});