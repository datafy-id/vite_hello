import { SearchForm } from "@/components/hotel/search-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Demo1, Demo2, Demo3 } from "./components/misc";

const components = {
  SearchForm,
  Demo1,
  Demo2,
  Demo3,
};

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Demo3");
  const Component = components[selectedComponent as keyof typeof components];

  return (
    <div className="border-8 border-green-500 p-8">
      <div className="mb-4">
        <RadioGroup
          value={selectedComponent}
          onValueChange={setSelectedComponent}
          className="flex flex-row gap-2"
        >
          {Object.keys(components).map((name) => (
            <div key={name} className="flex items-center space-x-2">
              <Label htmlFor={name}>{name}</Label>
              <RadioGroupItem value={name} id={name} />
            </div>
          ))}
        </RadioGroup>
      </div>
      <Component />
    </div>
  );
}

export default App;
