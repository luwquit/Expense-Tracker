import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export function NameInput({nameInput, setNameInput, placeholder}) {
  const [input, setInput] = useDebouncedValue<string>(nameInput, setNameInput)

  return (
    <Field className="pop-up-input">
      <FieldLabel htmlFor="form-name">Name</FieldLabel>
      <Input id="form-name" placeholder={placeholder} className="pl-5"
        type='text' value={input} onChange={(e) => {setInput(e.target.value)}}
      />
    </Field>
  );
}