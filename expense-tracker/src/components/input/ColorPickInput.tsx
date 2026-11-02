import { HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useColorPick } from '@/contexts/ColorPickerContext';
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export function ColorPickInput() {
  const {hex, setHex} = useColorPick();
  const [input, setInput] = useDebouncedValue<string>(hex, setHex);

  return (
    <div className="pop-up-input w-full">
      <p>Color</p>
      <Popover>
        <PopoverTrigger render={<button style={{backgroundColor: input}} className="ml-5 size-9 rounded-full border-2 border-bluish-white dark:border-deep-blue ring ring-deep-blue dark:ring-bluish-white cursor-pointer hover:scale-105 active:scale-100 transition-transform"></button>}></PopoverTrigger>
        <PopoverContent className="items-center bg-bluish-gray dark:bg-deep-blue">
          <HexColorPicker color={input} onChange={setInput} />
        </PopoverContent>
      </Popover>
    </div>
  );
}