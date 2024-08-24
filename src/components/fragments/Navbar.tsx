import Link from "next/link";
import NavbarMenu from "./NavbarMenu";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      {/* Logo */}
      <div className="md:col-span-3">
        <Link href="/dashboard">
          <h1 className="font-bold text-lg">
            <span className="text-yellow-500">Daily</span>
            <span className="text-primary">Epen</span>
          </h1>
        </Link>
      </div>

      {/* Menu List */}
      <NavbarMenu />

      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          <UserNav />
        ) : (
          <div className="flex items-center gap-x-2">
            <Button variant="default" asChild>
              <LoginLink> Login</LoginLink>
            </Button>
            <Button variant="secondary" asChild>
              <RegisterLink>Register</RegisterLink>
            </Button>
          </div>
        )}

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
