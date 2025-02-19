import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DocsLayout from "@/components/docs/DocsLayout"

export default function InputPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1>Input</h1>
          <p className="text-lg text-muted-foreground">
            Displays a form input field or a component that looks like an input field.
          </p>
        </div>

        <div className="space-y-4">
          <h2>Installation</h2>
          <pre className="rounded-lg bg-muted p-4">
            <code>{`import { Input } from "@/components/ui/input"`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h2>Usage</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Basic Input Example */}
            <div className="space-y-4">
              <h3>Basic Input</h3>
              <div className="space-y-2">
                <Input type="text" placeholder="Basic input example" />
              </div>
              
              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Input type="text" placeholder="Basic input example" />`}</code>
              </pre>
            </div>

            {/* Input with Label */}
            <div className="space-y-4">
              <h3>Input with Label</h3>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>

              <pre className="rounded-lg bg-muted p-4">
                <code>{`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    type="email" 
    id="email" 
    placeholder="Enter your email" 
  />
</div>`}</code>
              </pre>
            </div>

            {/* Disabled Input */}
            <div className="space-y-4">
              <h3>Disabled Input</h3>
              <div className="space-y-2">
                <Input disabled type="text" placeholder="Disabled input" />
              </div>

              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Input disabled type="text" placeholder="Disabled input" />`}</code>
              </pre>
            </div>

            {/* Input with Icon */}
            <div className="space-y-4">
              <h3>Input Sizes</h3>
              <div className="space-y-4">
                <Input className="h-8 text-sm" placeholder="Small input" />
                <Input placeholder="Default input" />
                <Input className="h-12 text-lg" placeholder="Large input" />
              </div>

              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Input className="h-8 text-sm" placeholder="Small input" />
<Input placeholder="Default input" />
<Input className="h-12 text-lg" placeholder="Large input" />`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Props</h2>
          <div className="space-y-4">
            <p>The Input component extends the HTML input element props with the following:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><code>className</code> - Additional CSS classes to add to the input</li>
              <li>All standard HTML input attributes are supported</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Examples</h2>
          <div className="space-y-4">
            <h3>Form Example</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
            </div>

            <pre className="rounded-lg bg-muted p-4">
              <code>{`<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="Enter username" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input 
      id="password" 
      type="password" 
      placeholder="Enter password" 
    />
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}