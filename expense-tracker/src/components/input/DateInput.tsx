import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

export function DateInput({dateInput, setDateInput}) {
  return (
    <>
    <div className="pop-up-input">
      <p>Date</p>
      <Popover>
        <PopoverTrigger className="flex items-center gap-x-2 cursor-pointer ml-5">
          <CalendarIcon className="hover:scale-105 active:scale-100" />
          {dateInput ? format(dateInput, "PPP") : <span>Pick a date</span>}
        </PopoverTrigger>
        <PopoverContent>
          <Calendar mode="single" captionLayout="dropdown" selected={dateInput} onSelect={setDateInput} />
        </PopoverContent>
      </Popover>
    </div>
    
    </>
    
  );
}