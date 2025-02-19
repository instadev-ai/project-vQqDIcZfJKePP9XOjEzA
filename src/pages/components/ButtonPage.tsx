import { Button } from "@/components/ui/button"
import DocsLayout from "@/components/docs/DocsLayout"
import { ArrowRight, Mail, Loader2 } from "lucide-react"

export default function ButtonPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1>Button</h1>
          <p className="text-lg text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        <div className="space-y-4">
          <h2>Installation</h2>
          <pre className="rounded-lg bg-muted p-4">
            <code>{`import { Button } from "@/components/ui/button"`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h2>Usage</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Variants */}
            <div className="space-y-4">
              <h3>Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              
              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}</code>
              </pre>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <h3>Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <ArrowRight className="h-4 w-4" />
</Button>`}</code>
              </pre>
            </div>

            {/* With Icons */}
            <div className="space-y-4">
              <h3>With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button variant="secondary">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>
<Button variant="secondary">
  Next <ArrowRight className="ml-2 h-4 w-4" />
</Button>`}</code>
              </pre>
            </div>

            {/* Loading State */}
            <div className="space-y-4">
              <h3>Loading State</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
                <Button disabled variant="secondary">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </Button>
              </div>

              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Props</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li><code>variant</code> - Button style variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</li>
              <li><code>size</code> - Button size: "default" | "sm" | "lg" | "icon"</li>
              <li><code>asChild</code> - Boolean to style a child component with button styles</li>
              <li>All standard HTML button attributes are supported</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Examples</h2>
          <div className="space-y-4">
            <h3>Button Group</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">Back</Button>
              <Button>Continue</Button>
            </div>

            <pre className="rounded-lg bg-muted p-4">
              <code>{`<div className="flex gap-2">
  <Button variant="outline">Back</Button>
  <Button>Continue</Button>
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}