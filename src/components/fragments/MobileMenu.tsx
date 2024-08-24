"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navbarLinks, NavbarMenuProps } from "./NavbarMenu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const location = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-5 flex px-2 space-y-1 flex-col">
          {navbarLinks.map((link) => (
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
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
