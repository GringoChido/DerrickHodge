"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Journey" },
  { href: "/work", label: "The Archive" },
  { href: "/color-of-noize", label: "Color of Noize" },
  { href: "/contact", label: "Inquiries" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Derrick Hodge"
              width={160}
              height={80}
              className="h-[80px] w-auto brightness-0 invert"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href ? "text-text" : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-[5px] w-6"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block h-[1.5px] w-full bg-white transition-transform duration-300"
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translate(3px, 3px)"
                  : "none",
              }}
            />
            <span
              className="block h-[1.5px] w-full bg-white transition-transform duration-300"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translate(3px, -3px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 md:hidden transition-transform duration-400 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="heading-md"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};
