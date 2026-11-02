import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export function NameInput({nameInput, setNameInput}) {
  const [input, setInput] = useDebouncedValue<string>(nameInput, setNameInput)

  return (
    <>
      <div className="pop-up-input">
        <p>Name</p>
        <input placeholder="e.g. Petcare" className="ml-5 focus:outline-none"
          type='text' value={input} onChange={(e) => {setInput(e.target.value)}}
        />
      </div>
    </>
  );
}