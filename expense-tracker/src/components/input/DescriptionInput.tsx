import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export function DescriptionInput({description, setDescription}) {
  const [input, setInput] = useDebouncedValue<string>(description, setDescription);
  return (
    <div className="pop-up-input">
      <label>Description</label>
      <input placeholder="(optional)" type="text" className="ml-5 focus:outline-none" value={input} onChange={(e) => {setInput(e.target.value)}} />
    </div>
  );
}