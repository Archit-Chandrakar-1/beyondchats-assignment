import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/articles")
      .then((res) => setArticles(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>BeyondChats Articles</h1>
        <p>Original & AI-updated blog posts</p>
      </header>

      <main className="container">
        {articles.map((article) => (
          <div className="card" key={article.id}>
            <div className="card-header">
              <h2>{article.title}</h2>
              {article.is_updated && (
                <span className="badge">Updated</span>
              )}
            </div>

            <p className="content">
              {article.content.slice(0, 350)}...
            </p>

            {article.source_url && (
              <a
                href={article.source_url}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Read original article →
              </a>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
