import DocsLayout from "@/components/docs/DocsLayout"

export default function DocsPage() {
  return (
    <DocsLayout>
      <div id="introduction">
        <h1>Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to our documentation. Here you'll find everything you need to get started.
        </p>
      </div>

      <div id="installation" className="mt-16">
        <h2>Installation</h2>
        <p>
          Get started by installing the package using your preferred package manager:
        </p>
        <pre className="rounded-lg bg-muted p-4">
          <code>npm install @your-package/name</code>
        </pre>
      </div>

      <div id="quick-start" className="mt-16">
        <h2>Quick Start</h2>
        <p>
          Here's a quick example to get you started:
        </p>
        <pre className="rounded-lg bg-muted p-4">
          <code>{`import { Button } from '@your-package/name'

function App() {
  return <Button>Click me</Button>
}`}</code>
        </pre>
      </div>

      <div id="button" className="mt-16">
        <h2>Button Component</h2>
        <p>
          The Button component is a versatile component that supports various styles and sizes.
        </p>
      </div>

      <div id="card" className="mt-16">
        <h2>Card Component</h2>
        <p>
          Cards are used to group and display content in a clear and concise format.
        </p>
      </div>

      <div id="input" className="mt-16">
        <h2>Input Component</h2>
        <p>
          The Input component is a flexible component that supports various types of input fields.
        </p>
      </div>
    </DocsLayout>
  )
}