import { ColorPickInput } from "@/components/input/ColorPickInput";
import { DescriptionInput } from "@/components/input/DescriptionInput";
import { IconPickInput } from "@/components/input/IconPickInput";
import { MoneyInput } from "@/components/input/MoneyInput";
import { NameInput } from "@/components/input/NameInput";
import { DialogFooter } from "@/components/ui/dialog";
import { initialColor, useColorPick } from "@/contexts/ColorPickerContext";
import { useIcon } from "@/contexts/IconPickerContext";
import { useStatusMsg } from "@/contexts/StatusMessageContext";
import type { NewSavingType } from "@/types/types";
import { useState } from "react";
import { addSaving } from "@/data/savingsService";

export function AddSavingForm() {
  const {hex, setHex} = useColorPick();
  const {iconName, setIconName} = useIcon();
  const {statusMsg, setStatusMsg} = useStatusMsg();

  const [nameInput, setNameInput] = useState<string>('');
  const [moneyInput, setMoneyInput] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  async function AddNewSaving(data: NewSavingType): Promise<void> {
    try {
      await addSaving(data);
      setStatusMsg(`New saving: ${nameInput} was successfully added!`);
      setNameInput('');
      setMoneyInput('');
      setDescription('');
      setHex(initialColor);
      setIconName(null);
    } catch (error) {
      setStatusMsg(`Failed to add ${nameInput}: ${error}`)
    }
  };

  const handleSubmit = async () => {
    if (!nameInput.trim() || !moneyInput || !iconName) {
      setStatusMsg('Enter a name, saving goal or choose an icon.');
      return;
    };
    
    await AddNewSaving({
      name: nameInput,
      savingGoal: Number(moneyInput),
      currentAmount: 0,
      icon: iconName,
      color: hex,
      description,
      status: 'inProgress',
      achivedDate: null
    })
  }

  return (
    <>
      <div className="space-y-3">
        <NameInput nameInput={nameInput} setNameInput={setNameInput} placeholder={'e.g. Car'} />
        <MoneyInput moneyInput={moneyInput} setMoneyInput={setMoneyInput} placeholder="$0.00">Saving Goal</MoneyInput>
        <div className="grid grid-cols-2 gap-3">
          <IconPickInput />
          <ColorPickInput />
        </div>
        <DescriptionInput description={description} setDescription={setDescription} />
      </div>

      <DialogFooter>
        <button className='pop-up-btn disabled:pointer-events-none disabled:opacity-60' 
        onClick={handleSubmit} disabled={!statusMsg ? false : true}>
          {!statusMsg ? 'Create' : 'Creating...'}
        </button>
      </DialogFooter>
    </>
  );
}