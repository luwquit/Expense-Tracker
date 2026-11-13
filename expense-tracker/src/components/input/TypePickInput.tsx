import { Field, FieldLabel } from "../ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function TypePickInput({typeInput, setTypeInput}) {

  const items = [
    {label: 'income', value: 'income'},
    {label: 'expense', value: 'expense'},
    {label: 'saving', value: 'saving'}
  ];

  return (
  <Field className="pop-up-input">
    <FieldLabel htmlFor="form-type">Type</FieldLabel>
    <Select items={items} value={typeInput} onValueChange={setTypeInput}>
      <SelectTrigger id="form-type" size="sm" className="cursor-pointer p-0 pl-5">
        <SelectValue placeholder="Select type of a transaction" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </Field>
  );
}