import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

interface StatusMessageContextType {
  statusMsg: string | null,
  setStatusMsg: Dispatch<SetStateAction<string>>
}

export const StatusMessageContext = createContext<StatusMessageContextType | undefined>(undefined);

export const useStatusMsg = () => {
  const context = useContext(StatusMessageContext);

  if (context === undefined) {
    throw new Error('No provider in StatusMessage Context')
  };

  return context;
}