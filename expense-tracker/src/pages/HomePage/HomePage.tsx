import { Header } from "../shared-components/Header"
import { HeroHomePage } from "./HeroHomePage"
import { PopUpWindowElement } from "../shared-components/PopUpWindow/PopUpWindowElement"
import { QuickActions } from "./QuickActions"
import { TransactionsHomePage } from "./TransactionsHomePage"
import { usePopUpWindow } from "../../contexts/PopUpWindowContext"

export function HomePage() {
  const {popUpWindow} = usePopUpWindow();

  return(
    <main className="relative py-30 ">
      <Header />
      <HeroHomePage />
      <QuickActions />
      <TransactionsHomePage />
      {popUpWindow && <PopUpWindowElement />}
      
    </main>
  )
  
}