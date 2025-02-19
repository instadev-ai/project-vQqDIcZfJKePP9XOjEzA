import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import DocsPage from "@/pages/Docs"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="docs-theme">
      <Router>
        <Routes>
          <Route path="/" element={<DocsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App