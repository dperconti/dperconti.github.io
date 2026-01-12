// mdx content parser
const parseMDX = async (content) => {
  // These are ES modules, so we need dynamic imports
  const { serialize } = await import("next-mdx-remote/serialize");
  const rehypeSlug = await import("rehype-slug");
  const remarkGfm = await import("remark-gfm");
  
  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug.default || rehypeSlug],
      remarkPlugins: [remarkGfm.default || remarkGfm],
    },
  };
  return await serialize(content, options);
};

module.exports = { parseMDX };
