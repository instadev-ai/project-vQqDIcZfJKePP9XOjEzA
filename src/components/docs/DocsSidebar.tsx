import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/#introduction" },
      { title: "Installation", href: "/#installation" },
      { title: "Quick Start", href: "/#quick-start" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Button", href: "/components/button" },
      { title: "Card", href: "/components/card" },
      { title: "Input", href: "/components/input" },
    ],
  },
]

export function DocsSidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  return (
    <div className={cn(
      "fixed top-0 left-0 z-30 h-screen w-full border-r bg-background lg:w-80",
      !isOpen && "w-16 lg:w-16"
    )}>
      <div className="flex h-14 items-center px-4 py-4 lg:h-[60px]">
        <Button
          variant="ghost"
          className="ml-auto h-8 w-8 px-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronRight className={cn(
            "h-4 w-4 transition-transform",
            !isOpen && "rotate-180"
          )} />
        </Button>
      </div>
      {isOpen && (
        <ScrollArea className="h-[calc(100vh-56px)]">
          <div className="px-4 py-2">
            {navigation.map((section) => (
              <div key={section.title} className="mb-4">
                <h4 className="mb-2 text-sm font-semibold">{section.title}</h4>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "block rounded-md px-2 py-1 text-sm hover:bg-accent",
                        location.pathname === link.href && "bg-accent"
                      )}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}