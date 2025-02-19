import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function DialogPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Dialog</h1>
      <p>A modal dialog that interrupts the user with important content and expects a response.</p>

      <h2>Installation</h2>
      <pre><code>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"`}</code></pre>

      <h2>Usage</h2>
      
      <div className="not-prose">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your
                data from our servers.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <h2>Code</h2>
      <pre><code>{`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-end gap-3">
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete Account</Button>
    </div>
  </DialogContent>
</Dialog>`}</code></pre>

      <h2>Props</h2>
      
      <h3>Dialog</h3>
      <ul>
        <li><code>open</code> - Optional controlled open state</li>
        <li><code>onOpenChange</code> - Optional callback when open state changes</li>
      </ul>

      <h3>DialogContent</h3>
      <ul>
        <li><code>className</code> - Optional additional classes</li>
        <li><code>children</code> - Dialog content</li>
      </ul>

      <h2>Examples</h2>

      <h3>With Form</h3>
      <div className="not-prose">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className="w-full rounded-md border px-3 py-2"
                  defaultValue="Pedro Duarte"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="w-full rounded-md border px-3 py-2"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Save changes</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}