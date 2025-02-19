import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ScrollArea className="h-full py-6">
          <div className="px-4 py-2">
            <h1 className="mb-4 text-xl font-bold">Documentation</h1>
            <nav className="space-y-2">
              <a
                href="#getting-started"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Getting Started
              </a>
              <a
                href="#installation"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Installation
              </a>
              <a
                href="#components"
                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Components
              </a>
            </nav>
          </div>
        </ScrollArea>
      </div>

      {/* Main content */}
      <main
        className={cn(
          "flex-1 px-4 transition-all duration-200 ease-in-out",
          sidebarOpen ? "lg:pl-64" : ""
        )}
      >
        <div className="mx-auto max-w-4xl py-12">
          {children}
        </div>
      </main>
    </div>
  );
}