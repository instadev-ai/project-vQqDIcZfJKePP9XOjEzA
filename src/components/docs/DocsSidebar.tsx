import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "#introduction" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Button", href: "#button" },
      { title: "Card", href: "#card" },
      { title: "Input", href: "#input" },
    ],
  },
]

export function DocsSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={cn(
      "border-r bg-background",
      isOpen ? "w-64" : "w-16",
      "transition-all duration-300 ease-in-out"
    )}>
      <div className="sticky top-0 h-screen">
        <div className="flex h-16 items-center border-b px-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronRight className={cn(
              "h-4 w-4 transition-transform",
              isOpen ? "rotate-180" : ""
            )} />
          </Button>
          {isOpen && (
            <span className="ml-2 text-lg font-semibold">Documentation</span>
          )}
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] py-4">
          {isOpen && (
            <div className="px-4">
              {navigation.map((section) => (
                <div key={section.title} className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold">{section.title}</h4>
                  <div className="space-y-1">
                    {section.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block rounded-md px-2 py-1 text-sm hover:bg-accent"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  )
}