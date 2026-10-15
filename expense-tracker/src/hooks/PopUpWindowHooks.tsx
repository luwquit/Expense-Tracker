import { usePopUpWindow } from "../contexts/PopUpWindowContext"

export const usePopUpControls = () => {
  const {setPopUpWindow} = usePopUpWindow();
  
  const openPopUp = () => setPopUpWindow(true);
  const closePopUp = () => setPopUpWindow(false);

  return {openPopUp, closePopUp};
}
