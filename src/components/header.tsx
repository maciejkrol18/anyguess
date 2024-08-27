import Link from "next/link";
import MobileNavigation from "./mobile-navigation";
import HeaderAuth from "./header-auth";

export default async function Header() {
  return (
    <header className="py-4">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="font-bold text-lg">anyguess</p>
        </Link>
        <div className="flex gap-6">
          <Link href="/browse">Browse</Link>
          <Link href="/new">Create</Link>
          <Link href="/guides">Guides</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center">
            <HeaderAuth />
          </div>
          <div className="flex items-center lg:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
