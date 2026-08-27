// Related posts: same categories, prefer distinct title bases, cap at 3
export const similerItems = (currentItem, allItems, slug) => {
  let categories = [];

  if (currentItem[0].frontmatter.categories.length > 0) {
    categories = currentItem[0].frontmatter.categories;
  }

  const stripBase = (title = "") =>
    String(title)
      .replace(
        /\s*[—:-]\s*(note\s+\d+|a field note|what I watch for|working notes|naming the owner|what fails first|the operable version|evidence over enthusiasm|a shorter feedback loop|keeping it teachable|small controls that stick).*$/i,
        ""
      )
      .replace(
        /\s+(in practice|under real load|without the theater|for engineering leaders|when the calendar is full)$/i,
        ""
      )
      .replace(/\s*\((20\d{2})\)\s*$/i, "")
      .trim()
      .toLowerCase();

  const currentBase = stripBase(currentItem[0].frontmatter.title);

  const filterByCategories = allItems.filter((item) =>
    categories.find((category) =>
      item.frontmatter.categories.includes(category)
    )
  );

  const others = [...new Set([...filterByCategories])].filter(
    (product) => product.slug !== slug
  );

  // Prefer posts that do not share the same cleaned title base
  const distinct = others.filter(
    (p) => stripBase(p.frontmatter.title) !== currentBase
  );
  const pool = distinct.length >= 3 ? distinct : others;

  // Stable-ish variety: sort by date desc then take 3
  return pool
    .slice()
    .sort((a, b) => {
      const da = new Date(a.frontmatter.date).getTime();
      const db = new Date(b.frontmatter.date).getTime();
      return db - da;
    })
    .slice(0, 3);
};
