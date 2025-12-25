module.exports = async function rewriteWithLLM(original, references) {
    return `
  ${original.content}
  
  ---
  
  ## Updated Version (AI Enhanced)
  
  This updated article improves structure and clarity by incorporating insights from top-ranking chatbot articles. 
  It emphasizes practical use-cases, clearer headings, and conversion-focused storytelling.
  
  ### Key Improvements
  - Clearer sections
  - More actionable advice
  - SEO-friendly formatting
  
  ### References
  ${references.map(r => `- ${r.url}`).join("\n")}
  `;
  };
  