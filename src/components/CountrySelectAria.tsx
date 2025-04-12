import { ComboBox, ListBox, ListBoxItem, Label, Input, Button, Popover } from "react-aria-components"

interface Country {
  label: string
  value: string
}

const countries: Country[] = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "gb" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Japan", value: "jp" },
  { label: "Australia", value: "au" },
]

export function CountrySelectAria() {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-medium">Country</Label>
      <ComboBox<Country>
        className="w-[200px]"
        defaultItems={countries}
        allowsCustomValue
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault()
          }
        }}
      >
        <div className="relative">
          <Input
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Select country..."
          />
          <Button className="absolute right-0 top-0 flex h-full items-center rounded-r-md px-2 focus:outline-none">
            <svg
              className="h-4 w-4 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </div>
        <Popover className="w-[--trigger-width] rounded-md border bg-popover text-popover-foreground shadow-md">
          <ListBox<Country>
            className="max-h-[300px] overflow-auto p-1"
            items={countries}
            selectionMode="single"
          >
            {(item) => (
              <ListBoxItem
                id={item.value}
                className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[focused]:bg-accent data-[focused]:text-accent-foreground"
                textValue={item.label}
              >
                {item.label}
              </ListBoxItem>
            )}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  )
} 