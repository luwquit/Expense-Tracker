import { useIcon } from "@/contexts/IconPickerContext";
import { IconPicker  } from "../ui/icon-picker";

export function IconPickInput() {
  const {iconName, setIconName} = useIcon();

  return (
    <div className="pop-up-input">
      <p>Icon</p>
      <IconPicker value={iconName} className="w-fit" onValueChange={setIconName}  />
    </div>
  );
}