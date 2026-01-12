const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const config = require("../config/config.json");
const { getSinglePage } = require("./contentParser");
const { blog_folder } = config.settings;
const { base_url } = config.site;

// Generate sitemap.xml
const generateSitemap = () => {
  const baseUrl = base_url === "/" ? "https://dperconti.github.io" : base_url;
  const currentDate = new Date().toISOString().split("T")[0];

  // Get all blog posts
  const posts = getSinglePage(`content/${blog_folder}`);
  
  // Get all categories
  const categories = [];
  posts.forEach((post) => {
    if (post.frontmatter.categories) {
      post.frontmatter.categories.forEach((cat) => {
        if (!categories.includes(cat)) {
          categories.push(cat);
        }
      });
    }
  });

  // Start building sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Blog -->
  <url>
    <loc>${baseUrl}/blog/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Contact -->
  <url>
    <loc>${baseUrl}/contact/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
`;

  // Add blog posts
  posts.forEach((post) => {
    const postDate = post.frontmatter.date
      ? new Date(post.frontmatter.date).toISOString().split("T")[0]
      : currentDate;
    sitemap += `  <!-- Blog Post: ${post.frontmatter.title} -->
  <url>
    <loc>${baseUrl}/${blog_folder}/${post.slug}/</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
`;
  });

  // Add categories (using slugify logic similar to textConverter)
  categories.forEach((category) => {
    const slug = category
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .trim();
    sitemap += `  <!-- Category: ${category} -->
  <url>
    <loc>${baseUrl}/categories/${slug}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
`;
  });

  sitemap += `</urlset>`;

  // Write sitemap to public directory
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap);
  console.log("Sitemap generated successfully at", sitemapPath);
};

// Run if called directly
if (require.main === module) {
  generateSitemap();
}

module.exports = generateSitemap;
