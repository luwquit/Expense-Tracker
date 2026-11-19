import { CategoryPickInput } from "@/components/input/CategoryPickInput";
import { DateInput } from "@/components/input/DateInput";
import { DescriptionInput } from "@/components/input/DescriptionInput";
import { MoneyInput } from "@/components/input/MoneyInput";
import { TypePickInput } from "@/components/input/TypePickInput";
import { DialogFooter } from "@/components/ui/dialog";
import { useStatusMsg } from "@/contexts/StatusMessageContext";
import { addTransaction } from "@/data/transactionsService";
import type { NewTransactionType, TransactionType } from "@/types/types";
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


  async function addNewTransaction(data: NewTransactionType): Promise<void> {
    try {
      await addTransaction(data);
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

  const handleSubmit = async () => {
    if (typeInput === 'saving' && categoryInput.type === 'category') {
      setStatusMsg('You can not add saving amount to category.');
      return;
    };

    if (typeInput === 'income' && categoryInput.type === 'saving') {
      setStatusMsg('You can not add income from your savings.')
      return;
    };

    if (typeInput === 'expense' && categoryInput.type === 'saving') {
      setStatusMsg('Are you sure you want to add expense from your savings?')
      return;
    };

    if (!amountInput || categoryInput === null || typeInput === null) {
      setStatusMsg('You need to fill required entry fields.');
      return;
    }

    await addNewTransaction({
      amount: Number(amountInput),
      type: typeInput,
      category: {
        id: categoryInput.id,
        type: categoryInput.type
      },
      date: dateInput,
      note: description.trim()
    })
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

