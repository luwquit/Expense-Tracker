import { IconPickInput } from "@/components/input/IconPickInput";
import { ColorPickInput } from "@/components/input/ColorPickInput";
import { DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { db } from "@/data/db";
import { initialColor, useColorPick } from "@/contexts/ColorPickerContext";
import { useIcon } from "@/contexts/IconPickerContext";
import type { NewCategoryType } from "@/types/types";
import { NameInput } from "@/components/input/NameInput";
import { MonthlyBudgetInput } from "@/components/input/MonthlyBudgetInput";


export function AddCategoryForm() {
  const {hex, setHex} = useColorPick();
  const {iconName, setIconName} = useIcon();

  const [nameInput, setNameInput] = useState<string>('');
  const [budgetInput, setBudgetInput] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  
  console.log(status)

  async function addNewCategory(data: NewCategoryType): Promise<void> {
    try {
      const id = await db.categories.add(data);
      setStatus(`${nameInput} category was added with id ${id}`);
      setNameInput('');
      setBudgetInput('');
      setHex(initialColor);
      setIconName(null);
    } catch (error) {
      setStatus(`Failed to add ${nameInput}: ${error}`)
      console.log(`Failed to add ${nameInput}: ${error}`)
    }
  };

  const handleSubmit = async() => {
    if (!nameInput.trim() || !iconName) {
      setStatus('Enter a name or choose an icon');
      return;
    }

    await addNewCategory({
      name: nameInput.trim(),
      monthlyBudget: Number(budgetInput),
      icon: iconName,
      color: hex
    })
  };

  return (
    <>
      <div className="space-y-3">
        <NameInput nameInput={nameInput} setNameInput={setNameInput} />
        <div className="grid grid-cols-2 gap-3">
          <IconPickInput />
          <ColorPickInput />
        </div>
        <MonthlyBudgetInput budgetInput={budgetInput} setBudgetInput={setBudgetInput} />
      </div>

      <DialogFooter>
        <button className="pop-up-btn" onClick={handleSubmit}>Create</button>
      </DialogFooter>
    </>
  );
}