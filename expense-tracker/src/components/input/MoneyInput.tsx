import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { preventDefaultNumberInput } from "@/utils/preventDefaultNumberInput";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

type MoneyInputProps = {
  moneyInput: string,
  setMoneyInput: Dispatch<SetStateAction<string>>,
  placeholder: string,
  children: ReactNode
}

export function MoneyInput({
  moneyInput,
  setMoneyInput,
  placeholder,
  children
} : MoneyInputProps) {
  const [input, setInput] = useDebouncedValue<string>(moneyInput, setMoneyInput)

  return (
    <Field className="pop-up-input">
      <FieldLabel htmlFor="form-money">{children}</FieldLabel>
      <Input placeholder={placeholder} type="number" className="pl-5 focus:outline-none"
        value={input} min={0}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => preventDefaultNumberInput(e)}
      />
    </Field>
  );
}