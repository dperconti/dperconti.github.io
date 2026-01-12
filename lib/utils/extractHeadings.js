/**
 * Extract headings from markdown content
 * Returns an array of headings with their level, text, and slug
 * @param {string} content - Raw markdown content
 * @returns {Array<{level: number, text: string, slug: string}>}
 */
export const extractHeadings = (content) => {
  if (!content) return [];

  // Match markdown headings (##, ###, etc.)
  // This regex matches headings from h2 to h6 (we'll filter to h2-h3 as specified)
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // Number of # characters
    const text = match[2].trim();
    
    // Only include h2 and h3 headings (level 2 and 3)
    if (level >= 2 && level <= 3) {
      // Generate slug that matches rehype-slug format
      const slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();

      headings.push({
        level,
        text,
        slug,
      });
    }
  }

  return headings;
};
