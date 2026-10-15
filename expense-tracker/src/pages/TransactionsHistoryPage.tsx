import { NavLink } from "react-router";
import { Header } from "../components/Header";
import { TransactionMessage } from "../components/TransactionMessage";
import { useTheme } from "../contexts/ThemeContext";
import { Devider } from "../components/Devider";

export function TransactionsHistoryPage() {
  const {theme} = useTheme();

  return (
    <section className="relative py-40">
      <div className="flex gap-4 items-center w-fit">
        <NavLink to="/" >
          <img src={theme === "light" ? "back-arrow-icon-lightTheme.png" : "back-arrow-icon-darkTheme.png"}
            className="lg:size-15 md:size-9 size-7 hover:opacity-70 hover:scale-105 active:scale-100 transition-transform transition-opacity"
          />
        </NavLink>
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold text-deep-blue dark:text-bluish-white">Transaction history</h2>
      </div>
      <Devider />
        
        
      
      
      <Header />
      <TransactionMessage />
    </section>
  );
}