import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export function Basic() {
  return (
    <div>
      <Button>Hello there</Button>
    </div>
  )
}

export function BasicSelect() {
  return (
    <Select>
      <Label>Favorite Animal</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
}
