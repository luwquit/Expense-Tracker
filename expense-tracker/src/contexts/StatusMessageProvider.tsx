import { useMemo, useState, type ReactNode } from "react";
import { StatusMessageContext } from "./StatusMessageContext";

export const StatusMessageProvider = ({children}: {children: ReactNode}) => {
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const value = useMemo(() => ({statusMsg, setStatusMsg}), [statusMsg]);

  return <StatusMessageContext value={value}>{children}</StatusMessageContext>
}