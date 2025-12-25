const axios = require("axios");
const cheerio = require("cheerio");

async function searchGoogle(query) {
  const searchUrl = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

  const response = await axios.get(searchUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const $ = cheerio.load(response.data);
  const results = [];

  $(".result__a").each((i, el) => {
    if (i < 5) {
      results.push({
        title: $(el).text(),
        url: $(el).attr("href"),
      });
    }
  });

  return results;
}

module.exports = searchGoogle;
