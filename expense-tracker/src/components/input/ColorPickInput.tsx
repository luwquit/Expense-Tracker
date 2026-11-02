import Sketch from '@uiw/react-color-sketch';
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { initialColor, useColorPick } from '@/contexts/ColorPickerContext';
import { useEffect, useState, useRef } from 'react';
import { hexToHsva, type ColorResult } from '@uiw/color-convert';

export function ColorPickInput() {
  const {hex, setHex} = useColorPick();
  const [hsva, setHsva] = useState(() => hexToHsva(initialColor));
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleColorChange = (color: ColorResult) => {
    setHsva(color.hsva);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setHex(color.hex), 500);
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div className="pop-up-input w-full">
      <p>Color</p>
      <Popover>
        <PopoverTrigger render={<button style={{backgroundColor: hex}} className="ml-5 size-9 rounded-full border-2 border-bluish-white dark:border-deep-blue ring ring-deep-blue dark:ring-bluish-white cursor-pointer hover:scale-105 active:scale-100 transition-transform"></button>}></PopoverTrigger>
        <PopoverContent className="items-center bg-bluish-gray dark:bg-deep-blue">
          <Sketch
            style={{backgroundColor: "var(--sketch-bg)", boxShadow: null}}
            color={hsva}
            disableAlpha={true}
            onChange={handleColorChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}