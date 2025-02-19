import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import DocsLayout from "@/components/docs/DocsLayout"

export default function CardPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1>Card</h1>
          <p className="text-lg text-muted-foreground">
            Cards are surfaces that display content and actions on a single topic.
          </p>
        </div>

        <div className="space-y-4">
          <h2>Installation</h2>
          <pre className="rounded-lg bg-muted p-4">
            <code>{`import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h2>Usage</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Basic Card Example */}
            <div className="space-y-4">
              <h3>Basic Card</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card example</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content of the card.</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">Last updated 2h ago</p>
                </CardFooter>
              </Card>
              
              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Card>
  <CardHeader>
    <CardTitle>Basic Card</CardTitle>
    <CardDescription>A simple card example</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
  </CardContent>
  <CardFooter>
    <p>Last updated 2h ago</p>
  </CardFooter>
</Card>`}</code>
              </pre>
            </div>

            {/* Interactive Card Example */}
            <div className="space-y-4">
              <h3>Interactive Card</h3>
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>Hover to see the effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has hover effects and transitions.</p>
                </CardContent>
              </Card>

              <pre className="rounded-lg bg-muted p-4">
                <code>{`<Card className="hover:shadow-lg transition-shadow duration-200">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Hover to see the effect</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has hover effects and transitions.</p>
  </CardContent>
</Card>`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Anatomy</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><code>Card</code> - The root container</li>
            <li><code>CardHeader</code> - Container for card header content</li>
            <li><code>CardTitle</code> - Title of the card</li>
            <li><code>CardDescription</code> - Description or subtitle</li>
            <li><code>CardContent</code> - Main content area</li>
            <li><code>CardFooter</code> - Footer content area</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}