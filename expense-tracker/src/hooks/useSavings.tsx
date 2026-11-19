import { db } from "@/data/db";
import type { Saving } from "@/types/types";
import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";

export function useSavings() {
  const savings: Saving[] | undefined = useLiveQuery(() => db.savings.toArray(), []);
  const savingMap = useMemo(() => new Map<number, Saving>(savings?.map(s => [s.id, s])), [savings]);
  return {savings, savingMap};
}