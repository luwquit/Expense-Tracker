import DropDownBtn from "@/components/buttons/DropDownBtn";
import { AccordionLayout } from "@/components/shared-components/AccordionCardLayout/AccordionLayout";
import { Card, CardContent } from "@/components/ui/card";

export function SavingCard() {
  return (
    <Card>
        <CardContent className="text-deep-blue dark:text-bluish-white">
          <div className="flex justify-between">
            <div className="flex items-center w-fit md:gap-x-5 gap-x-2">
              <div className="bg-category-groceries lg:size-17 md:size-14 size-10 rounded-full"></div>
              <div>
                <p className="lg:text-xl md:text-lg text-md">Travel to Japan</p>
                <p className="lg:text-lg md:text-md text-sm font-light"><span className="font-bold">$432.89</span> of $1000</p>
              </div>
            </div>

            <div className="flex items-center w-fit md:gap-x-3">
              <div className="bg-category-groceries lg:size-17 md:size-14 size-10 rounded-full"></div>
              <DropDownBtn />
            </div>
          </div>
          
          <AccordionLayout>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis eos quos, odio doloremque, 
            veniam quo facere dolor earum commodi nihil voluptas repellendus rerum amet aut doloribus impedit vel, repudiandae magnam!
          </AccordionLayout>
        </CardContent>
      </Card>
  );
}
