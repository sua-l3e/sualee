import { navLinks } from "@/_datas/nav.data";
import StatusBadge from "../StatusBadge";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-6 top-0 bg-black min-w-7xl fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center justify-between px-32">
        <div className="flex gap-8 text-lg font-thin">
            {navLinks.map((link) => (
        <Link key={link.id} href={link.href} className="trasition-all duration-200 hover:-translate-y-1">
          {link.label}
        </Link>
        ))}
        </div>
        <div className="hidden md:block">
          <StatusBadge />
        </div>
      </div>
    </nav>
  );
}