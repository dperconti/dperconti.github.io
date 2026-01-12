import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/components/Post";
import { getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";

const { blog_folder } = config.settings;

const Blog = ({ posts, currentPage = 1 }) => {
  const { pagination } = config.settings;
  const sortPostByDate = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const startIndex = (currentPage - 1) * pagination;
  const endIndex = startIndex + pagination;
  const paginatedPosts = sortPostByDate.slice(startIndex, endIndex);

  return (
    <Base
      title="Blog - Engineering Leadership & Technical Excellence"
      meta_title="Blog - Engineering Leadership, Scaling Teams, and Technical Excellence"
      description="Read articles on engineering leadership, scaling engineering teams, technical excellence, mentorship, coaching, and minimalist engineering organization."
    >
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-10 mb-12">
              <h1 className="h1 mb-4 glass-heading">Engineering Leadership Blog</h1>
              <p className="text-xl font-secondary text-text">
                Insights on scaling teams, technical excellence, mentorship, and engineering practices
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="row">
                {paginatedPosts.map((post, i) => (
                  <Post
                    className="col-12 mb-6 sm:col-6"
                    key={"key-" + i}
                    post={post}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </div>
          )}
        </div>
      </div>
    </Base>
  );
};

export default Blog;

// Get blog posts
export const getStaticProps = async () => {
  const posts = getSinglePage(`content/${blog_folder}`);
  return {
    props: {
      posts: posts,
      currentPage: 1,
    },
  };
};
