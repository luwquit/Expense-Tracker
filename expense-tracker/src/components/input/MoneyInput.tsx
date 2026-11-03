import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { preventDefaultNumberInput } from "@/utils/preventDefaultNumberInput";
import type { Dispatch, ReactNode, SetStateAction } from "react";

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
    <>
      <div className="pop-up-input">
        <p>{children}</p>
        <input placeholder={placeholder} className="ml-5 focus:outline-none"
          type='number' value={input} min={0}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => preventDefaultNumberInput(e)}
        />
      </div>
    </>
  );
}