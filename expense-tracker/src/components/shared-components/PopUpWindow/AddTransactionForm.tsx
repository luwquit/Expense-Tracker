import { CategoryPickInput } from "@/components/input/CategoryPickInput";
import { DateInput } from "@/components/input/DateInput";
import { DescriptionInput } from "@/components/input/DescriptionInput";
import { MoneyInput } from "@/components/input/MoneyInput";
import { TypePickInput } from "@/components/input/TypePickInput";
import { DialogFooter } from "@/components/ui/dialog";
import type { TransactionType } from "@/types/types";
import { format } from "date-fns";
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

  const handleSubmit = () => {
    if (typeInput === 'saving' && categoryInput.type === 'category') {
      console.log('You can not add saving amount to category.')
      return;
    };

    if (typeInput === 'income' && categoryInput.type === 'saving') {
      console.log('You can not add income from your savings.')
      return;
    }

    if (typeInput === 'expense' && categoryInput.type === 'saving') {
      console.log('Are you sure you want to add expense from your savings?')
      return;
    }

    console.log(typeInput);
    console.log(categoryInput)
    console.log(format(dateInput, 'PPP'))
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
        <button className="pop-up-btn" onClick={handleSubmit}>Submit</button>
      </DialogFooter>
    </>
  );
}

