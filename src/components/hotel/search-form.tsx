import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export function SearchForm() {
  const form = useForm({
    defaultValues: {
      location: 100,
      checkIn: "",
      checkOut: "",
      guests: 0,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const isCollapsed = true;

  return (
    <div className="[&>*]:border">
      <div data-x1="ok1" className="[&_[data-slot=action]]:hover:text-4xl">
        <div data-slot="action">
          <div>AAAA</div>
          <div>BBBB</div>
        </div>
      </div>

      <br />
      <br />

      <div
        data-collapsed={isCollapsed}
        className="[&[data-collapsed=true]_svg]:rotate-180"
      >
        <svg>...</svg>
      </div>

      <br />
      <br />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="border border-red-500">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                      type="number"
                      min={10}
                    />
                  </FormControl>
                  <FormDescription>Hello</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
          </div>

          <Button type="submit">OK</Button>
        </form>
      </Form>
    </div>
  );
}
