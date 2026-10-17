import { Header } from "../components/Header"
import { HeroHomePage } from "../components/HeroHomePage"
import { PopUpWindowElement } from "../components/PopUpWindowElement"
import { QuickActions } from "../components/QuickActions"
import { TransactionsHomePage } from "../components/TransactionsHomePage"
import { usePopUpWindow } from "../contexts/PopUpWindowContext"

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