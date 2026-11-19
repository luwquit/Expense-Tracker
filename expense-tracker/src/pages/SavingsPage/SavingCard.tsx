import DropDownBtn from "@/components/buttons/DropDownBtn";
import { AccordionLayout } from "@/components/shared-components/AccordionCardLayout/AccordionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon-picker";
import { db } from "@/data/db";
import type { Saving } from "@/types/types";
import { getPercent } from "@/utils/getPercent";
import { useLiveQuery } from "dexie-react-hooks";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export function SavingCard() {
  const savings: Saving[] | undefined = useLiveQuery(() => db.savings.toArray(), []);
  if(!savings) return null;

  return (
    <>
      {savings.map(saving => (
        <Card key={saving.id} className="bg-bluish-white dark:bg-deep-blue ring-0 shadow-md">
          <CardContent className="text-deep-blue dark:text-bluish-white">
            <div className="flex justify-between md:gap-x-5 gap-x-2 items-center">
              <div className="lg:size-17 md:size-14 size-10 rounded-full relative shrink-0" style={{backgroundColor: saving.color}}>
                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 lg:size-10 md:size-8 size-6 bg-bluish-white rounded-full md:p-1 p-0.5">
                  <Icon name={(saving.icon)} className="size-full text-deep-blue" />
                </div>
              </div>
              
              <div className="w-full">
                <p className="lg:text-xl md:text-lg text-md">{saving.name}</p>
                <p className="lg:text-lg md:text-md text-sm font-light"><span className="font-bold">${saving.currentAmount}</span> of ${saving.savingGoal}</p>
              </div>

              <div className="flex items-center w-fit gap-x-3">
                <div className="lg:size-17 md:size-14 size-10">
                  <CircularProgressbar value={Number(getPercent(saving.savingGoal, saving.currentAmount))} text={`${getPercent(saving.savingGoal, saving.currentAmount)}%`} 
                  strokeWidth={8} background styles={buildStyles({
                    pathColor: `${saving.color}`,
                    textColor: `${saving.color}`,
                    backgroundColor: `color-mix(in srgb, ${saving.color} 40%, var(--color-bluish-white))`,
                    trailColor: `color-mix(in srgb, ${saving.color} 20%, var(--color-bluish-white))`,
                    textSize: '1.7rem',
                  })} className="font-bold" />
                </div>                
                <DropDownBtn />
              </div>
            </div>

            <AccordionLayout>
              {saving.description ? saving.description : 'No description yet.'}
            </AccordionLayout>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
