import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import DocsPage from "@/pages/Docs"
import CardPage from "@/pages/components/CardPage"
import InputPage from "@/pages/components/InputPage"
import ButtonPage from "@/pages/components/ButtonPage"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="docs-theme">
      <Router>
        <Routes>
          <Route path="/" element={<DocsPage />} />
          <Route path="/components/card" element={<CardPage />} />
          <Route path="/components/input" element={<InputPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}