import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"

export function DocsSidebar() {
  const location = useLocation()

  const items = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/",
        },
        {
          title: "Installation",
          href: "/installation",
        },
        {
          title: "Theming",
          href: "/theming",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          href: "/components/button",
        },
        {
          title: "Card",
          href: "/components/card",
        },
        {
          title: "Input",
          href: "/components/input",
        },
        {
          title: "Dialog",
          href: "/components/dialog",
        },
        {
          title: "Select",
          href: "/components/select",
        },
        {
          title: "Tabs",
          href: "/components/tabs",
        },
        {
          title: "Toast",
          href: "/components/toast",
        },
      ],
    },
  ]

  return (
    <div className="h-screen border-r bg-background">
      <div className="h-[60px] border-b px-6 py-3 font-semibold">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">Docs</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-60px)] pb-10">
        <div className="px-4 py-2">
          {items.map((section, index) => (
            <div key={index} className="py-4">
              <h4 className="mb-2 px-2 text-sm font-semibold">{section.title}</h4>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block rounded-md px-2 py-1.5 text-sm hover:bg-accent",
                    location.pathname === item.href
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}