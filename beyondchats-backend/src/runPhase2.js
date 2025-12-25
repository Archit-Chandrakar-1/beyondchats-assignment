const fetchLatestArticle = require("./automation/fetchLatestArticle");
const searchGoogle = require("./automation/searchGoogle");
const scrapeArticleContent = require("./automation/scrapeArticleContent");
const rewriteWithLLM = require("./automation/rewriteWithLLM");
const saveUpdatedArticle = require("./automation/saveUpdatedArticle");

(async () => {
  try {
    // STEP 1 — Fetch latest article
    const article = await fetchLatestArticle();

    // STEP 2 — Search Google for related articles
    const results = await searchGoogle(article.title);

    console.log("\n🔍 Related links:");
    results.forEach((r, i) => {
      console.log(`${i + 1}. ${r.title}`);
    });
    console.log("\nAutomation Phase 2 Step 2 ✅");

    // STEP 3 — Scrape content from top 2 links
    console.log("\n📄 Scraping content from top 2 links...\n");

    const scrapedArticles = [];

    for (let i = 0; i < 2; i++) {
      const content = await scrapeArticleContent(results[i].url);

      scrapedArticles.push({
        title: results[i].title,
        url: results[i].url,
        content
      });

      console.log(`--- Article ${i + 1} content preview ---`);
      console.log(content.substring(0, 300));
      console.log("\n----------------------------------\n");
    }

    console.log("Automation Phase 2 Step 3 ✅");

    // STEP 4 — Rewrite original article using scraped content (LLM mocked)
    console.log("\n🤖 Rewriting article using AI...\n");

    const updatedContent = await rewriteWithLLM(article, scrapedArticles);

    // STEP 5 — Save updated article
    await saveUpdatedArticle({
      title: article.title,
      content: updatedContent
    });

    console.log("Automation Phase 2 Completed Successfully ✅");
  } catch (error) {
    console.error("❌ Phase 2 failed:", error.message);
  }
})();
