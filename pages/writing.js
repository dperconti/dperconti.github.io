import config from "@config/config.json";
import writing from "@config/writing.json";
import Base from "@layouts/Baseof";
import Link from "next/link";

const Writing = () => {
  return (
    <Base
      title={`Writing — ${config.profile.name}`}
      meta_title={`Writing — ${config.profile.name}`}
      description="Notes and writing from Donato Perconti."
    >
      <div className="site-frame">
        <p className="site-page-sub">writing</p>
        <h1 className="site-page-title">Writing</h1>
        <p className="site-lede">
          Short pieces here; longer threads live elsewhere.
        </p>

        <div className="site-section-head">
          <span>$ ls</span>
          <span>{writing.length} items</span>
        </div>

        <ul className="site-feed">
          {writing.map((item) => (
            <li key={item.href} className="site-feed__item">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-feed__link"
                >
                  <span className="site-feed__title">{item.title}</span>
                  <span className="site-feed__meta">
                    {item.meta} · {item.date}
                  </span>
                </a>
              ) : (
                <Link href={item.href} className="site-feed__link">
                  <span className="site-feed__title">{item.title}</span>
                  <span className="site-feed__meta">
                    {item.meta} · {item.date}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Base>
  );
};

export default Writing;
