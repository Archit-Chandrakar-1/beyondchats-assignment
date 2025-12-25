const axios = require("axios");

// module.exports = async function saveUpdatedArticle(article) {
//   await axios.post("http://localhost:8000/api/articles", {
//     title: article.title + " (Updated)",
//     content: article.content,
//     is_updated: true
//   });
// };

module.exports = async function saveUpdatedArticle(article) {
  console.log("\n💾 Saving updated article (mocked)...");
  console.log("Title:", article.title + " (Updated)");
  console.log("Content length:", article.content.length);
  console.log("✅ Article saved successfully (mocked)");
};
