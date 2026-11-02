import { IconPickInput } from "@/components/input/IconPickInput";
import { ColorPickInput } from "@/components/input/ColorPickInput";
import { DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { preventDefaultNumberInput } from "@/utils/preventDefaultNumberInput";
import { db } from "@/data/db";
import { initialColor, useColorPick } from "@/contexts/ColorPickerContext";
import { useIcon } from "@/contexts/IconPickerContext";
import type { NewCategoryType } from "@/types/types";
import { NameInput } from "@/components/input/NameInput";


export function AddCategoryForm() {
  const [nameInput, setNameInput] = useState<string>('');
  const [budgetInput, setBudgetInput] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const {hex, setHex} = useColorPick();
  const {iconName, setIconName} = useIcon();
  console.log(status)

  async function addNewCategory(data: NewCategoryType): Promise<void> {
    try {
      const id = await db.categories.add(data);
      setStatus(`${nameInput} category was added with id ${id}`);
      console.log(`${nameInput} category was added with id ${id}`);
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
      console.log('Enter a name or choose an icon')
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
        <NameInput setNameInput={setNameInput} />

        <div className="grid grid-cols-2 gap-3">
          <IconPickInput />
          <ColorPickInput />
        </div>
      
        <div className="pop-up-input">
          <p>Monthly budget</p>
          <input placeholder="(optional)" className="ml-5 focus:outline-none"
            type='number' value={budgetInput} 
            onChange={(e) => setBudgetInput(e.target.value)}
            onKeyDown={(e) => preventDefaultNumberInput(e)}
          />
        </div>
      </div>

      <DialogFooter>
        <button className="pop-up-btn" onClick={handleSubmit}>Create</button>
      </DialogFooter>
    </>
  );
}