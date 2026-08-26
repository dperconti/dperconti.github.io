import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Social from "@layouts/components/Social";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="footer border-t py-12 transition-colors duration-200">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {menu.main.map((item, i) => (
                <li key={`footer-nav-${i}`}>
                  <Link
                    href={item.url}
                    {...(item.url.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="footer-link text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mb-8 flex justify-center">
            <Social source={social} className="profile-social-icons" />
          </div>

          {copyright && (
            <div className="text-center">
              {markdownify(copyright, "p", "footer-copyright text-sm")}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
