const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const config = require("../config/config.json");
const { blog_folder } = config.settings;
const jsonDir = "./.json";
const postsDir = path.join("content", blog_folder);

// ensure posts directory exists
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// get post data (empty array if no files)
const getPosts = fs.readdirSync(postsDir);
const filterPosts = getPosts.filter((post) => post.match(/^(?!_)/));
const posts = filterPosts.map((filename) => {
  const slug = filename.replace(".md", "");
  const postData = fs.readFileSync(
    path.join(postsDir, filename),
    "utf-8"
  );
  const { data } = matter(postData);
  const content = matter(postData).content;

  return {
    frontmatter: data,
    content: content,
    slug: slug,
  };
});

try {
  if (!fs.existsSync(jsonDir)) {
    fs.mkdirSync(jsonDir);
  }
  fs.writeFileSync(`${jsonDir}/posts.json`, JSON.stringify(posts));
} catch (err) {
  console.error(err);
}

