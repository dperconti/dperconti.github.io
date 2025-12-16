import { createContext, useContext } from "react";
import posts from "../.json/posts.json";
import { slugify } from "@lib/utils/textConverter";

const HeaderContext = createContext();
export const TaxonomySlugProvider = ({ children }) => {
  // Count category usage for sorting
  const categoryCounts = {};
  posts.forEach(post => {
    if (post.frontmatter && post.frontmatter.categories) {
      post.frontmatter.categories.forEach(cat => {
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      });
    }
  });

  const categories = [
    ...new Set(
      posts.reduce((acc, post) => [...acc, ...(post.frontmatter?.categories || [])], [])
    ),
  ]
    .map((item) => ({ 
      name: item, 
      url: `/categories/${slugify(item)}`,
      count: categoryCounts[item] || 0
    }))
    .sort((a, b) => {
      // Sort by count (most posts first) - most frequent categories appear first
      return b.count - a.count;
    });
    
  return (
    <HeaderContext.Provider value={{ categories }}>
      {children}
    </HeaderContext.Provider>
  );
};
export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

