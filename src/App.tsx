import DocsLayout from "./components/layout/DocsLayout";
import { ThemeProvider } from "./components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DocsLayout>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1>Welcome to the Documentation</h1>
            
            <section id="getting-started">
              <h2>Getting Started</h2>
              <p>
                Welcome to our documentation. This guide will help you get started
                with our platform quickly and efficiently.
              </p>
            </section>

            <section id="installation" className="mt-12">
              <h2>Installation</h2>
              <p>
                To install our platform, follow these simple steps:
              </p>
              <pre className="rounded-lg bg-muted p-4">
                <code>npm install @your-package/name</code>
              </pre>
            </section>

            <section id="components" className="mt-12">
              <h2>Components</h2>
              <p>
                Our component library provides a wide range of UI elements to help
                you build beautiful applications.
              </p>
              <ul>
                <li>Button - Interactive button components</li>
                <li>Card - Versatile card layouts</li>
                <li>Input - Form input elements</li>
                <li>Modal - Popup dialog components</li>
              </ul>
            </section>
          </div>
        </DocsLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;