import { useEffect, useState } from "react";

export function NameInput({setNameInput}) {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(async () => {
      setNameInput(input)
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    }

  }, [input, setNameInput])

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