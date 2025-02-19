import { useState } from "react"
import { Outlet } from "react-router-dom"
import { DocsSidebar } from "./DocsSidebar"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"

export default function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-200 ease-in-out 
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:relative md:translate-x-0`}
        >
          <DocsSidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 md:ml-64">
          <div className="mx-auto max-w-4xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}