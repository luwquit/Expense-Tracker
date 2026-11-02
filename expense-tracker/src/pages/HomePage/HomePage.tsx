import { HeroHomePage } from "./HeroHomePage"
import { PopUpWindowElement } from "@/components/shared-components/PopUpWindow/PopUpWindowElement"
import { QuickActions } from "./QuickActions"
import { TransactionsHomePage } from "./TransactionsHomePage"
import { usePopUpWindow } from "@/contexts/PopUpWindowContext"
import { Layout } from "@/components/shared-components/Header/Layout"
import { StatusMessage } from "@/components/shared-components/PopUpWindow/StatusMessage"

export function HomePage() {
  const {popUpWindow} = usePopUpWindow();

  return(
    <>
      <Layout>
        <HeroHomePage />
        <QuickActions />
        <TransactionsHomePage />
        {popUpWindow && <PopUpWindowElement />}
        <StatusMessage></StatusMessage>
      </Layout>
      
    </>
    
  )
  
}