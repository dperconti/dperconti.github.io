import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";

const SiteNav = () => {
  const router = useRouter();

  const isActive = (url) => {
    if (url === "/") return router.pathname === "/";
    return router.asPath === url || router.asPath === `${url}/`;
  };

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__brand">
          dperconti.com<span className="site-nav__cursor">_</span>
        </Link>
        <nav className="site-nav__links" aria-label="Primary">
          {menu.main.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`site-nav__link${isActive(item.url) ? " is-active" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
