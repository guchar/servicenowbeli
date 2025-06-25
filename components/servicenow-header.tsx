"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Menu } from "lucide-react";
import Image from "next/image";

export function ServiceNowHeader() {
  const pathname = usePathname();

  function linkClasses(href: string) {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `text-sm font-medium transition-colors hover:text-[#0b7cce] ${
      isActive ? "text-gray-900" : "text-muted-foreground"
    }`;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center mr-4 select-none">
          <Image
            src="/NomNow%20logo.png"
            alt="NomNow logo"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/" className={linkClasses("/")}>
            Today's Meals
          </Link>
          <Link href="/reviews" className={linkClasses("/reviews")}>
            My Reviews
          </Link>
          <Link href="/stats" className={linkClasses("/stats")}>
            Statistics
          </Link>
          <Link href="/map" className={linkClasses("/map")}>
            Snack Map
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://www.shutterstock.com/image-photo/studio-shot-handsome-dark-haired-600nw-2295961447.jpg"
              alt="User"
              className="object-cover"
            />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
