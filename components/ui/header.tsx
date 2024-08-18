"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";


export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed z-30 w-full">
      <div className="mx-auto max-w-7xl mt-2">
        <div className="relative flex h-14 rounded-2xl items-center justify-between gap-3 bg-white/40 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-2 text-lg">
            <li>
              <Link
                href="#home"
                className="btn shadow-none hover:bg-violet-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#technology"
                className="btn shadow-none hover:bg-violet-500"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                href="https://chromewebstore.google.com"// pop up for extention on store
                className="btn shadow-none hover:bg-violet-400 bg-violet-500"
              >
                Add To Chrome
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
