import ThemeSwitcher from "@layouts/components/ThemeSwitcher";

const Footer = () => {
  return (
    <footer className="footer border-t py-8 transition-colors duration-200 mt-auto">
      <div className="container">
        <div className="mx-auto max-w-xl flex items-center justify-center">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
