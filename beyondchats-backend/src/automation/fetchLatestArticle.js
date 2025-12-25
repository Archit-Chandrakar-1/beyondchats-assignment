const axios = require("axios");

async function fetchLatestArticle() {
  try {
    const url = "http://localhost:8000/api/articles";

    console.log("🔍 Fetching from:", url);

    const response = await axios.get(url, {
      timeout: 5000,
      headers: {
        Accept: "application/json",
      },
    });

    console.log("✅ Raw response status:", response.status);

    if (!Array.isArray(response.data)) {
      throw new Error("API did not return an array");
    }

    if (response.data.length === 0) {
      throw new Error("No articles found in API");
    }

    const latestArticle = response.data[response.data.length - 1];

    console.log("📰 Latest article title:", latestArticle.title);

    return latestArticle;
  } catch (error) {
    console.error("❌ Failed to fetch latest article");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else if (error.request) {
      console.error("❌ No response from server (is it running?)");
    } else {
      console.error("Error message:", error.message);
    }

    throw error;
  }
}

module.exports = fetchLatestArticle;
