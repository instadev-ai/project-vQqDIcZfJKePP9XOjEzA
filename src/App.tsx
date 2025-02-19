import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import DocsLayout from "@/components/docs/DocsLayout"
import DocsPage from "@/pages/Docs"
import CardPage from "@/pages/components/CardPage"
import InputPage from "@/pages/components/InputPage"
import ButtonPage from "@/pages/components/ButtonPage"
import DialogPage from "@/pages/components/DialogPage"
import SelectPage from "@/pages/components/SelectPage"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route element={<DocsLayout />}>
            <Route path="/" element={<DocsPage />} />
            <Route path="/components/card" element={<CardPage />} />
            <Route path="/components/input" element={<InputPage />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/dialog" element={<DialogPage />} />
            <Route path="/components/select" element={<SelectPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}