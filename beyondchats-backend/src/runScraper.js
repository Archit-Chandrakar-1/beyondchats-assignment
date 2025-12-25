const scrapeBeyondChats = require("./scraper/beyondChatsScraper");

scrapeBeyondChats()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
