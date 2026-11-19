import DropDownBtn from "@/components/buttons/DropDownBtn";
import { CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon-picker";
import { useLookup } from "@/contexts/LookupContext";
import { db } from "@/data/db";
import type { Transaction } from "@/types/types";
import { TransactionAmount } from "@/pages/TransactionHistoryPage/transactionMessages/TransactionAmount";
import { TransactionCardContainer } from "@/pages/TransactionHistoryPage/transactionMessages/TransactionCardContainer";
import { format } from "date-fns";
import { useLiveQuery } from "dexie-react-hooks";
import { AccordionLayout } from "../../../components/shared-components/AccordionCardLayout/AccordionLayout";

export function TransactionCard() {
  const {categoryMap, savingMap} = useLookup();
  const transactions: Transaction[] | undefined = useLiveQuery(() => db.transactions.toArray(), []);

  if (!transactions) return null;

  return (
    <>
      {transactions.map(transaction => {
        const targetType = transaction.category.type === 'category' 
          ? categoryMap.get(transaction.category.id) 
          : savingMap.get(transaction.category.id);

        return (
          <TransactionCardContainer key={transaction.id} transaction={transaction}>
            <CardContent className="text-deep-blue dark:text-bluish-white">
              <div className="flex flex-row justify-between items-center gap-x-3">
                
                <div className="flex gap-5 items-center">
                  <div style={{backgroundColor: targetType.color}} className="lg:size-17 md:size-14 size-10 rounded-full relative shrink-0 ring-1">
                    <div className="lg:size-10 md:size-8 size-6 rounded-full shrink-0 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-bluish-white md:p-1.5 p-0.5">
                      <Icon name={targetType.icon} className="size-full text-deep-blue" />
                    </div>
                  </div>

                  <span>
                    <h4 className="font-semibold lg:text-2xl md:text-xl text-md">{targetType.name}</h4>
                    <h5 className="text-blue-details dark:text-bluish-gray font-medium md:text-md text-xs">{format(transaction.date, 'PP')}</h5>
                  </span>
                </div>

                <div className="flex items-center w-fit gap-x-3">
                  <TransactionAmount transaction={transaction}></TransactionAmount>
                  <DropDownBtn />
                </div>
              </div>
              
              <AccordionLayout>
                {transaction.note ? transaction.note : 'No description yet.'}
              </AccordionLayout>
            </CardContent>
          </TransactionCardContainer>
        );
      })}
    </>
  );
}













// {/* <div >

//       <div className="flex justify-between items-center gap-x-3 bg-linear-to-r from-bluish-white from-40% to-expense-light/50 dark:from-deep-blue dark:to-expense-dark/50 shadow-md rounded-4xl py-5 px-5">
//         <div className="flex gap-5 items-center ">
//           <div className="lg:size-15 md:size-13 size-10 bg-category-salary rounded-full shrink-0"></div>
//           <span>
//             <h4 className="text-deep-blue dark:text-bluish-white font-semibold lg:text-2xl md:text-xl text-md">Groceries</h4>
//             <h5 className="text-blue-details dark:text-bluish-gray font-medium md:text-md text-xs">Oct 6, 2026</h5>
//           </span>
//         </div>
//         <div className="flex items-center w-fit gap-x-3">
//           <h3 className="text-expense-light dark:text-expense-dark font-bold lg:text-2xl md:text-xl text-md w-fit">-$45.61</h3>
//           <DropDownBtn />
//         </div>
//       </div>

//     </div> */}