import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import Link from "next/link";

const BookCard = ({ book, className }) => {
  return (
    <div className={className}>
      <div className="card">
        <h2 className="h3 mb-2 font-normal">
          <Link href={`/${book.slug}`} className="block">
            {book.frontmatter.title}
          </Link>
        </h2>
        {book.frontmatter.description && (
          <p className="my-4 text-text">{book.frontmatter.description}</p>
        )}
        <Link
          className="btn-link mt-7 inline-flex items-center hover:text-primary"
          href={`/${book.slug}`}
        >
          Read Book
          <svg
            className="ml-1"
            width="22"
            height="11"
            viewBox="0 0 16 8"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.3536 4.35355c.1952-.19526.1952-.51184.0-.7071L12.1716.464467C11.9763.269205 11.6597.269205 11.4645.464467c-.1953.195262-.1953.511845.0.707103L14.2929 4 11.4645 6.82843c-.1953.19526-.1953.51184.0.7071C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553l3.182-3.18198zM-.437114e-7 4.5H15v-1H.437114e-7l-.874228e-7 1z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Books = ({ books }) => {
  return (
    <Base
      title="Books - All Books"
      meta_title="Books - All Books"
      description="Browse all available books and publications"
    >
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-10 mb-12">
              <h1 className="h1 mb-4 glass-heading">All Books</h1>
              <p className="text-xl font-secondary text-text">
                Explore all available books and publications
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="row">
                {books.length > 0 ? (
                  books.map((book, i) => (
                    <BookCard
                      className="col-12 mb-6 sm:col-6"
                      key={"key-" + i}
                      book={book}
                    />
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p className="text-text">No books available yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Books;

// Get all books (content files with layout "chapter")
export const getStaticProps = async () => {
  const allPages = getSinglePage("content");
  const books = allPages.filter((page) => page.frontmatter.layout === "chapter");
  
  return {
    props: {
      books: books,
    },
  };
};
