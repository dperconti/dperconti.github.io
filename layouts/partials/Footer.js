import social from "@config/social.json";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav className="site-footer__links" aria-label="Footer">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a
            href="/Donato_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          <Link href="/about">about</Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
