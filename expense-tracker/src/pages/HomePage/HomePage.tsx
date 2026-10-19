import { HeroHomePage } from "./HeroHomePage"
import { PopUpWindowElement } from "@/components/shared-components/PopUpWindow/PopUpWindowElement"
import { QuickActions } from "./QuickActions"
import { TransactionsHomePage } from "./TransactionsHomePage"
import { usePopUpWindow } from "@/contexts/PopUpWindowContext"
import { Layout } from "@/components/shared-components/Header/Layout"

export function HomePage() {
  const {popUpWindow} = usePopUpWindow();

  return(
    <>
      <Layout>
        <HeroHomePage />
        <QuickActions />
        <TransactionsHomePage />
        {popUpWindow && <PopUpWindowElement />}
      </Layout>
      
    </>
    
  )
  
}