import { usePopUpWindow } from "../contexts/PopUpWindowContext"

export const usePopUpControls = () => {
  const {setPopUpWindow} = usePopUpWindow();
  
  const openPopUp = (type: 'transaction' | 'category' | 'savings') => setPopUpWindow(type);
  const closePopUp = () => setPopUpWindow(null);

  return {openPopUp, closePopUp};
}
