import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.get('/nse', async (req, res) => {
  const url = "https://www.nseindia.com/api/master-quote";
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36",
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
      "Referer": "https://www.nseindia.com/"
    }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
