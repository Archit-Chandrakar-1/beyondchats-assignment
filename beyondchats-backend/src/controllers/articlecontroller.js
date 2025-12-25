
const prisma = require("../db");

// GET /api/articles
exports.getAll = async (req, res) => {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/articles/:id
exports.getOne = async (req, res) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/articles
exports.create = async (req, res) => {
  try {
    const { title, content, sourceUrl, isUpdated } = req.body;

    const article = await prisma.article.create({
      data: {
        title,
        content,
        sourceUrl,
        isUpdated: isUpdated ?? false,
      },
    });

    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/articles/:id
exports.update = async (req, res) => {
  try {
    const article = await prisma.article.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /api/articles/:id
exports.remove = async (req, res) => {
  try {
    await prisma.article.delete({
      where: { id: Number(req.params.id) },
    });

    res.json({ message: "Article deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
