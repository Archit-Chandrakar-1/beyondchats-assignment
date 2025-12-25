module.exports = async function scrapeTopArticles(results) {
    // Pretend scraping content
    return results.slice(0, 2).map((r, i) => ({
      url: r.url || `https://example.com/article-${i + 1}`,
      content: `This is scraped content from ${r.title}. It talks about chatbots, sales funnels, and conversion optimization.`
    }));
  };