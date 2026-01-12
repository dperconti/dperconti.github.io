import menu from "@config/menu.json";
import { useHeaderContext } from "context/state";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Header = () => {
  // router
  const router = useRouter();

  //context
  const { categories } = useHeaderContext();

  //local state
  const [openMenu, setOpenMenu] = useState(false);
  const [navMenu, setNavMenu] = useState(
    menu.main.map((item) => ({ ...item, type: "main" }))
  );

  useEffect(() => {
    const matchRoute = menu.main.find((item) => item.url === router.asPath);
    const navList = [...menu.main];
    
    // Filter to show only specific categories: Fintech, Python, TypeScript
    const allowedCategories = ['Fintech', 'Python', 'TypeScript'];
    const filteredCategories = categories.filter(cat => 
      allowedCategories.includes(cat.name)
    );
    
    // Insert filtered categories after "Blog" if it exists, otherwise after first item
    const blogIndex = navList.findIndex(item => item.name === "Blog" || item.url === "/blog");
    if (blogIndex !== -1 && filteredCategories.length > 0) {
      navList.splice(blogIndex + 1, 0, ...filteredCategories);
    } else if (filteredCategories.length > 0) {
      navList.splice(1, 0, ...filteredCategories);
    }
    setNavMenu(navList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath, menu.main, categories]);

  return (
    <>
      <header className="header fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200">
        <nav className="navbar w-full">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Left Section */}
              <div className="flex items-center gap-4 flex-1">
                {/* Mobile Menu Toggle */}
                <button
                  className="inline-flex items-center justify-center p-2 md:hidden transition-opacity hover:opacity-70"
                  onClick={() => setOpenMenu(!openMenu)}
                  aria-label={openMenu ? "Close menu" : "Open menu"}
                  aria-expanded={openMenu}
                >
                  {openMenu ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>

                {/* Logo/Brand - Desktop */}
                <Link href="/" className="hidden md:block navbar-brand">
                  <span className="text-lg font-semibold">Donato Perconti</span>
                </Link>
              </div>

              {/* Center Section - Navigation Links */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <ul className="navbar-nav flex items-center gap-1">
                  {navMenu.map((menu, i) => (
                    <React.Fragment key={`menu-${i}`}>
                      {menu.hasChildren ? (
                        <li className="nav-item nav-dropdown group relative">
                          <span className="nav-link inline-flex items-center gap-1">
                            {menu.name}
                            <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                          <ul className="nav-dropdown-list absolute left-0 top-full mt-1 hidden w-48 rounded-lg border py-2 md:invisible md:block md:opacity-0 md:transition-all md:group-hover:visible md:group-hover:opacity-100">
                            {menu.children.map((child, i) => (
                              <li className="nav-dropdown-item" key={`children-${i}`}>
                                <Link
                                  href={child.url}
                                  className="nav-dropdown-link block px-4 py-2 transition-colors"
                                  onClick={() => setOpenMenu(false)}
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li className="nav-item">
                          <Link
                            onClick={() => setOpenMenu(false)}
                            href={menu.url}
                            className={`nav-link ${
                              router.asPath === menu.url && "nav-link-active"
                            }`}
                          >
                            {menu.name}
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>

              {/* Right Section */}
              <div className="flex items-center justify-end gap-4 flex-1">
                {/* Theme Switcher */}
                <ThemeSwitcher />
              </div>
            </div>

            {/* Mobile Menu */}
            <ul
              id="nav-menu"
              className={`navbar-nav ${
                !openMenu && "hidden"
              } md:hidden pb-4 pt-2`}
            >
              {navMenu.map((menu, i) => (
                <React.Fragment key={`menu-mobile-${i}`}>
                  {menu.hasChildren ? (
                    <li className="nav-item nav-dropdown group relative">
                      <span className="nav-link inline-flex items-center gap-1">
                        {menu.name}
                        <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                      <ul className="nav-dropdown-list ml-4 mt-1 hidden group-hover:block">
                        {menu.children.map((child, i) => (
                          <li className="nav-dropdown-item" key={`children-mobile-${i}`}>
                            <Link
                              href={child.url}
                              className="nav-dropdown-link block px-4 py-2 transition-colors"
                              onClick={() => setOpenMenu(false)}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        onClick={() => setOpenMenu(false)}
                        href={menu.url}
                        className={`nav-link ${
                          router.asPath === menu.url && "nav-link-active"
                        }`}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;

