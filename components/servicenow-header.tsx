import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Menu } from "lucide-react";

export function ServiceNowHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2 mr-4">
          <div className="w-8 h-8 rounded-md bg-[#0b7cce] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M12 2H2v10h10V2z" />
              <path d="M12 12h10v10H12V12z" />
              <path d="M22 2h-5v5h5V2z" />
              <path d="M7 17H2v5h5v-5z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-[#0b7cce]">ServiceNow</span>
          <span className="text-sm font-medium text-gray-500">Food Ranker</span>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-[#0b7cce]"
          >
            Today's Meals
          </Link>
          <Link
            href="/reviews"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#0b7cce]"
          >
            My Reviews
          </Link>
          <Link
            href="/stats"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#0b7cce]"
          >
            Statistics
          </Link>
          <Link
            href="/map"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#0b7cce]"
          >
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
