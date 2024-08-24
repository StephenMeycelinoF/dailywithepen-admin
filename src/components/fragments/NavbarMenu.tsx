"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavbarMenuProps {
  name: string;
  href: string;
}

export const navbarLinks: NavbarMenuProps[] = [
  {
    name: "Home",
    href: "/dashboard",
  },
  {
    name: "Design",
    href: "/design",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function NavbarMenu() {
  const location = usePathname();

  return (
    <div className="hidden md:flex justify-center items-center col-span-6 gap-x-4">
      {navbarLinks.map((link: NavbarMenuProps) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={cn(
              location === link.href
                ? "text-yellow-500"
                : "hover:bg-sky-300 hover:text-white hover:bg-opacity-75",
              "group flex items-center px-2 py-2 font-medium rounded-md"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
