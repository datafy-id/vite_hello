import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const countries = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "gb" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Japan", value: "jp" },
  { label: "Australia", value: "au" },
]

export function CountrySelectShadcn() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredCountries = React.useMemo(() => {
    return countries.filter((country) =>
      country.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  React.useEffect(() => {
    if (open) {
      setSelectedIndex(0)
    }
  }, [open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => 
          prev < filteredCountries.length - 1 ? prev + 1 : prev
        )
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
        break
      case "Enter":
        e.preventDefault()
        if (filteredCountries[selectedIndex]) {
          setValue(filteredCountries[selectedIndex].value)
          setOpen(false)
        }
        break
      case "Escape":
        e.preventDefault()
        setOpen(false)
        break
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
          onKeyDown={handleKeyDown}
        >
          {value
            ? countries.find((country) => country.value === value)?.label
            : "Select country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput 
            placeholder="Search country..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {filteredCountries.map((country, index) => (
              <CommandItem
                key={country.value}
                value={country.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
                className={cn(
                  "cursor-pointer",
                  index === selectedIndex && "bg-accent"
                )}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === country.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {country.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 