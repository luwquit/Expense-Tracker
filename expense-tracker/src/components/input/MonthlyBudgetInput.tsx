import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { preventDefaultNumberInput } from "@/utils/preventDefaultNumberInput";

export function MonthlyBudgetInput({budgetInput, setBudgetInput}) {
  const [input, setInput] = useDebouncedValue<string>(budgetInput, setBudgetInput)

  return (
    <>
      <div className="pop-up-input">
        <p>Monthly budget</p>
        <input placeholder="(optional)" className="ml-5 focus:outline-none"
          type='number' value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => preventDefaultNumberInput(e)}
        />
      </div>
    </>
  );
}