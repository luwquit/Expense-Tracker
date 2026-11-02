import { useEffect, useRef, useState } from "react";

export function useDebouncedValue<T>(
  value: T,
  onCommit: (v: T) => void,
  delay = 500
) {
  const [local, setLocal] = useState(value);

  const commitRef = useRef(onCommit);
  useEffect (() => {commitRef.current = onCommit});

  useEffect(() => {setLocal(value)}, [value]);

  useEffect(() => {
    if (local === value) return;
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      commitRef.current(local);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [value, local, delay]);

  return [local, setLocal] as const;
}
