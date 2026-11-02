import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export const initialColor: string = '#fff';

interface ColorPickerContextType {
  hex: string,
  setHex: Dispatch<SetStateAction<string>>
}

export const ColorPickerContext = createContext<ColorPickerContextType>({hex: initialColor, setHex: () => null});

export const useColorPick = () => {
  const context = useContext(ColorPickerContext);

  if (context === undefined) {
    throw new Error('No provider in ColorPicker Context')
  };

  return context;
}