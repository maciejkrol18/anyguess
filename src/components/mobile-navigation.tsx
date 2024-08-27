"use client";

import Link from "next/link";
import { Menu, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { User } from "next-auth";

interface MobileNavigationProps {
  user: User | null;
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={toggleOpen}
        className="hover:cursor-pointer"
      >
        {isOpen ? <XCircle /> : <Menu />}
      </button>
      {isOpen ? (
        <nav className="bg-background z-50 fixed inset-0 top-[67px] flex flex-col gap-4 overflow-y-scroll p-4">
          <Link
            href="/"
            className="text-xl pb-2"
            onClick={() => closeOnCurrent("/")}
          >
            Home
          </Link>
          <Link
            href="browse"
            className="text-xl pb-2"
            onClick={() => closeOnCurrent("/browse")}
          >
            Browse challenges
          </Link>
          <Link
            href="/new"
            className="text-xl pb-2"
            onClick={() => closeOnCurrent("/new")}
          >
            Create a new challenge
          </Link>
          <Link
            href="/guides"
            className="text-xl pb-2"
            onClick={() => closeOnCurrent("/guides")}
          >
            Guides
          </Link>
          <Link
            href="/privacy"
            className="text-xl pb-2"
            onClick={() => closeOnCurrent("/privacy")}
          >
            Privacy policy
          </Link>
          <Link
            href="https://github.com/maciejkrol18/anyguess"
            target="_blank"
            className="text-xl pb-2"
          >
            Github
          </Link>
        </nav>
      ) : null}
    </>
  );
}
