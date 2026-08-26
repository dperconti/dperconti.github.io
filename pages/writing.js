import config from "@config/config.json";
import writing from "@config/writing.json";
import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import Link from "next/link";

const { blog_folder } = config.settings;

const formatMetaDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${y}·${m}`;
};

const Writing = ({ posts }) => {
  const total = writing.length + posts.length;

  return (
    <Base
      title={`Writing — ${config.profile.name}`}
      meta_title={`Writing — ${config.profile.name}`}
      description="Notes on engineering leadership, coaching, and AI workflows."
    >
      <div className="site-frame">
        <p className="site-page-sub site-enter site-enter--1">writing</p>
        <h1 className="site-page-title site-enter site-enter--2">Writing</h1>
        <p className="site-lede site-enter site-enter--3">
          Essays on engineering leadership, mentorship, and how AI changes how
          teams collaborate and ship.
        </p>

        <div className="site-section-head site-enter site-enter--4">
          <span>$ ls</span>
          <span>{total} items</span>
        </div>

        <ul className="site-feed site-enter site-enter--5">
          {writing.map((item) => (
            <li key={item.href} className="site-feed__item">
              <Link href={item.href} className="site-feed__link">
                <span className="site-feed__title">{item.title}</span>
                <span className="site-feed__meta">
                  {item.meta} · {item.date}
                </span>
              </Link>
            </li>
          ))}
          {posts.map((post) => (
            <li key={post.slug} className="site-feed__item">
              <Link
                href={`/${blog_folder}/${post.slug}/`}
                className="site-feed__link"
              >
                <span className="site-feed__title">
                  {post.frontmatter.title}
                </span>
                <span className="site-feed__meta">
                  {(post.frontmatter.categories &&
                    post.frontmatter.categories[0]) ||
                    "essay"}{" "}
                  · {formatMetaDate(post.frontmatter.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Base>
  );
};

export default Writing;

export const getStaticProps = async () => {
  const posts = sortByDate(getSinglePage(`content/${blog_folder}`)).map(
    (p) => ({
      slug: p.slug,
      frontmatter: {
        title: p.frontmatter.title,
        date: p.frontmatter.date,
        categories: p.frontmatter.categories || [],
      },
    })
  );

  return { props: { posts } };
};
