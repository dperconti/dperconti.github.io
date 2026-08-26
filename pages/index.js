import config from "@config/config.json";
import writing from "@config/writing.json";
import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import Link from "next/link";

const RECENT_LIMIT = 8;
const { blog_folder } = config.settings;

const formatMetaDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${y}·${m}`;
};

const Home = ({ recentPosts, totalPosts }) => {
  const { name, designation } = config.profile;
  const role = designation || "Engineering Leadership";
  const feedCount = writing.length + totalPosts;

  return (
    <Base
      title={`${name} — ${role}`}
      meta_title={`${name} — ${role}`}
      description={config.profile.bio}
    >
      <div className="site-frame">
        <p className="site-prompt site-enter site-enter--1">
          $ {name} · {role.toLowerCase()}
        </p>

        <h1 className="site-hook site-enter site-enter--2">
          Engineering leadership is coaching people who build together —
          especially when agents join the loop.
        </h1>

        <p className="site-lede site-enter site-enter--3">
          Mentorship, cross-team collaboration, and clear process around AI and
          event-driven workflows are how ownership stays real as the tools move.
        </p>

        <Link href="/thesis/" className="site-cta site-enter site-enter--4">
          read the thesis →
        </Link>

        <div className="site-section-head site-enter site-enter--5">
          <span>$ ls writing</span>
          <span>{feedCount} items</span>
        </div>

        <ul className="site-feed site-enter site-enter--6">
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
          {recentPosts.map((post) => (
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

        {totalPosts > RECENT_LIMIT && (
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/writing/" className="site-cta" style={{ marginBottom: 0 }}>
              all writing →
            </Link>
          </p>
        )}
      </div>
    </Base>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = sortByDate(getSinglePage(`content/${blog_folder}`));
  const recentPosts = posts.slice(0, RECENT_LIMIT).map((p) => ({
    slug: p.slug,
    frontmatter: {
      title: p.frontmatter.title,
      date: p.frontmatter.date,
      categories: p.frontmatter.categories || [],
    },
  }));

  return {
    props: {
      recentPosts,
      totalPosts: posts.length,
    },
  };
};
