import { Header } from "../components/Header"
import { HeroHomePage } from "../components/HeroHomePage"
import { QuickActions } from "../components/QuickActions"
import { TransactionsHomePage } from "../components/TransactionsHomePage"

export function HomePage() {
  return(
    <main className="relative pt-30">
      <Header />
      <HeroHomePage />
      <QuickActions />
      <TransactionsHomePage />
    </main>
  )
  
}