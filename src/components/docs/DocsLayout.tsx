import { cn } from "@/lib/utils"
import { DocsSidebar } from "./DocsSidebar"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className={cn(
        "flex-1 px-4 md:px-8 py-6 md:py-8",
        "prose prose-slate dark:prose-invert max-w-none"
      )}>
        {children}
      </main>
    </div>
  )
}