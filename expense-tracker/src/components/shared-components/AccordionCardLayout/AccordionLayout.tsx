import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ReactNode } from "react";

export function AccordionLayout({children}: {children: ReactNode}) {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger className="lg:text-lg md:text-md text-sm ">Description</AccordionTrigger>
          <AccordionContent className="lg:text-md  text-sm font-light">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}