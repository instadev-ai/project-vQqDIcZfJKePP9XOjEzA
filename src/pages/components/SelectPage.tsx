import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Select</h1>
      <p>Displays a list of options for the user to pick from—triggered by a button.</p>

      <h2>Installation</h2>
      <pre><code>{`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`}</code></pre>

      <h2>Usage</h2>
      
      <div className="not-prose">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <h2>Code</h2>
      <pre><code>{`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="grape">Grape</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}</code></pre>

      <h2>Props</h2>
      
      <h3>Select</h3>
      <ul>
        <li><code>value</code> - Optional controlled value</li>
        <li><code>defaultValue</code> - Optional default value</li>
        <li><code>onValueChange</code> - Optional callback when value changes</li>
        <li><code>disabled</code> - Optional disabled state</li>
      </ul>

      <h3>SelectTrigger</h3>
      <ul>
        <li><code>className</code> - Optional additional classes</li>
        <li><code>children</code> - Trigger content</li>
      </ul>

      <h2>Examples</h2>

      <h3>With Groups</h3>
      <div className="not-prose">
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              <SelectItem value="cst">China Standard Time (CST)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <h3>Disabled</h3>
      <div className="not-prose">
        <Select disabled>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}