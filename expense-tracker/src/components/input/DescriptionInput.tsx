import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export function DescriptionInput({description, setDescription}) {
  const [input, setInput] = useDebouncedValue<string>(description, setDescription);
  return (
    <Field className="pop-up-input">
      <FieldLabel htmlFor="form-description">Description</FieldLabel>
      <Input id="form-description" placeholder="(optional)" type="text" className="pl-5"
        value={input} onChange={(e) => {setInput(e.target.value)}}
      />
    </Field>
  );
}