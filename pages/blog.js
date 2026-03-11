import Base from "@layouts/Baseof";
import Link from "next/link";

export default function BlogPage() {
  return (
    <Base
      title="Blog | Donato Perconti"
      meta_title="Blog at pnw.technology"
      description="My blog lives at pnw.technology: engineering leadership, AI, startups, and the human side of building things."
    >
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-8">
              <h1 className="h1 mb-6 glass-heading">Blog</h1>
              <p className="text-xl font-secondary text-text mb-8">
                My blog now lives at{" "}
                <a
                  href="https://pnw.technology/blog"
                  className="text-primary hover:underline font-semibold"
                >
                  pnw.technology/blog
                </a>
                . Engineering leadership, AI, startups, mental health in tech,
                and the human side of building things.
              </p>
              <Link
                href="https://pnw.technology/blog"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Go to blog →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
