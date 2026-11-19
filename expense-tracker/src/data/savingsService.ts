import type { NewSavingType, Saving } from "@/types/types";
import { db } from "./db";

const {savings} = db;

export const addSaving = (data: NewSavingType): Promise<number> => savings.add(data);
export const editSaving = (id: Saving['id'], changes: Partial<NewSavingType>): Promise<number> => savings.update(id, changes);
export const deleteSaving = (id: Saving['id']): Promise<void> => savings.delete(id);
export const updateAmountSaving = (id: Saving['id'], amount: number): Promise<number> =>
  savings.where('id').equals(id).modify(saving => {
    saving.currentAmount += amount;
})
