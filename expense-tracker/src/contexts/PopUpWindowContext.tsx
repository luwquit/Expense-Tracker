import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export type PopUpWindow = 'transaction' | 'category' | 'savings' | null;

export interface PopUpWindowContextType {
  popUpWindow: PopUpWindow,
  setPopUpWindow: Dispatch<SetStateAction<PopUpWindow>>
}

export const PopUpWindowContext = createContext<PopUpWindowContextType | undefined>(undefined);

export const usePopUpWindow = () => {
  const context = useContext(PopUpWindowContext);

  if (context === undefined) {
    throw new Error('No Provider in PopUpWindow Context');
  }

  return context;
}