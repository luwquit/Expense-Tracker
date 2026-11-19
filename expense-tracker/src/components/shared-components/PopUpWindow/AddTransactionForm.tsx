import { CategoryPickInput } from "@/components/input/CategoryPickInput";
import { DateInput } from "@/components/input/DateInput";
import { DescriptionInput } from "@/components/input/DescriptionInput";
import { MoneyInput } from "@/components/input/MoneyInput";
import { TypePickInput } from "@/components/input/TypePickInput";
import { DialogFooter } from "@/components/ui/dialog";
import { useStatusMsg } from "@/contexts/StatusMessageContext";
import { addTransaction } from "@/data/transactionsService";
import type { TransactionType } from "@/types/types";
import { useState } from "react";

type CategoryInputType = {
  id: number,
  type: 'saving' | 'category'
};

export function AddTransactionForm() {
  const [amountInput, setAmountInput] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [categoryInput, setCategoryInput] = useState<CategoryInputType | null>(null);
  const [typeInput, setTypeInput] = useState<TransactionType | null>(null);
  const [dateInput, setDateInput] = useState<Date | undefined>(new Date());
  const {statusMsg, setStatusMsg} = useStatusMsg();

  const handleSubmit = async () => {
    if (typeInput === 'saving' && categoryInput.type === 'category') {
      setStatusMsg('You can not add saving amount to category.');
      return;
    } else if ((typeInput === 'income' && categoryInput.type === 'saving') || (typeInput === 'expense' && categoryInput.type === 'saving')) {
      setStatusMsg('You can not add income or expense from your savings.')
      return;
    } else if (!amountInput || categoryInput === null || typeInput === null) {
      setStatusMsg('You need to fill required entry fields.');
      return;
    }

    try {
      await addTransaction({
        amount: Number(amountInput),
        type: typeInput,
        category: {
          id: categoryInput.id,
          type: categoryInput.type
        },
        date: dateInput,
        note: description.trim()
      });
      setStatusMsg('Transaction was added!');
      setAmountInput('');
      setDescription('');
      setCategoryInput(null);
      setTypeInput(null);
      setDateInput(new Date());
    } catch (error) {
      setStatusMsg(`Failed to add transaction: ${error}`)
    }
  }

  return (
    <>
      <div className="space-y-3">
        <MoneyInput moneyInput={amountInput} setMoneyInput={setAmountInput} placeholder="$0.00">Amount</MoneyInput>
        <CategoryPickInput setCategoryInput={setCategoryInput} />
        <TypePickInput typeInput={typeInput} setTypeInput={setTypeInput} />
        <DateInput dateInput={dateInput} setDateInput={setDateInput} />
        <DescriptionInput description={description} setDescription={setDescription}  />
      </div>

      <DialogFooter>
        <button className="pop-up-btn disabled:pointer-events-none disabled:opacity-60" 
        onClick={handleSubmit} disabled={!statusMsg ? false : true}>
          {!statusMsg ? 'Submit' : 'Submiting...'}
        </button>
      </DialogFooter>
    </>
  );
}

