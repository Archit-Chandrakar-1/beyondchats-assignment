const axios = require("axios");
const cheerio = require("cheerio");
const prisma = require("../db");

const LAST_PAGE_URL = "https://beyondchats.com/blogs/page/14/";

async function scrapeBeyondChats() {
  const { data } = await axios.get(LAST_PAGE_URL);
  const $ = cheerio.load(data);

  const articles = $("article.entry-card").slice(0, 5);

  for (let i = 0; i < articles.length; i++) {
    const el = articles[i];

    const title = $(el).find("h2.entry-title a").text().trim();
    const link = $(el).find("h2.entry-title a").attr("href");

    console.log("Scraping:", title);

    const articlePage = await axios.get(link);
    const $$ = cheerio.load(articlePage.data);

    const content = $$("div.entry-content p")
      .map((_, p) => $$(p).text().trim())
      .get()
      .join("\n\n");

    await prisma.article.upsert({
      where: { sourceUrl: link },
      update: {},
      create: {
        title,
        content,
        sourceUrl: link,
        isUpdated: false,
      },
    });
  }

  console.log("✅ 5 Oldest Articles Scraped Successfully");
}

module.exports = scrapeBeyondChats;
