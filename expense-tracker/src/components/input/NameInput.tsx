import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export function NameInput({nameInput, setNameInput, placeholder}) {
  const [input, setInput] = useDebouncedValue<string>(nameInput, setNameInput)

  return (
    <>
      <div className="pop-up-input required:outline-expense-light required:outline-1">
        <p>Name</p>
        <input placeholder={placeholder} required className="ml-5 focus:outline-none"
          type='text' value={input} onChange={(e) => {setInput(e.target.value)}}
        />
      </div>
    </>
  );
}