import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DeleteIcon, Edit2Icon, MenuIcon } from "lucide-react";

export default function DropDownBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-bluish-gray/30 dark:hover:bg-blue-details/10" render={
        <Button variant="ghost" size="icon" className="cursor-pointer hover:text-deep-blue dark:hover:text-bluish-white">
          <MenuIcon className="text-current" />
        </Button>}>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-bluish-white dark:bg-deep-blue">
        <DropdownMenuGroup className="text-deep-blue dark:text-bluish-white">
          <DropdownMenuItem>
            <Edit2Icon className="text-current" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DeleteIcon className="text-current" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}