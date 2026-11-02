import type { IconName } from "lucide-react/dynamic";
import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export interface IconPickerContextType {
  iconName: IconName,
  setIconName: Dispatch<SetStateAction<IconName>>
}

export const IconPickerContext = createContext<IconPickerContextType | undefined>(undefined);

export const useIcon = (): IconPickerContextType => {
  const context = useContext(IconPickerContext);

  if (context === undefined) {
    throw new Error('No provider in Icon Picker Context')
  }

  return context;
}