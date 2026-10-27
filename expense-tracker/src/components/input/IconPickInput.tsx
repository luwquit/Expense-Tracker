import { IconPicker } from "../ui/icon-picker";

export function IconPickInput() {
  return (
    <div className="pop-up-input">
      <p>Icon</p>
      <IconPicker className="w-fit" />
    </div>
  );
}