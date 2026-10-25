import './App.css'
import { ThemeContextProvider } from './contexts/ThemeProvider';
import { HomePage } from './pages/HomePage/HomePage'
import { Route, Routes } from "react-router";
import { TransactionsHistoryPage } from './pages/TransactionHistoryPage/TransactionsHistoryPage';
import { PopUpWindowContextProvider } from './contexts/PopUpWindowProvider';
import { SavingsPage } from './pages/SavingsPage/SavingsPage';
import { SpendAnalysisPage } from './pages/SpendAnalysisPage/SpendAnalysisPage';

function App() {

  return (
    <ThemeContextProvider>
      <PopUpWindowContextProvider>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path='/history' element={<TransactionsHistoryPage />}></Route>
          <Route path='/savings' element={<SavingsPage />}></Route>
          <Route path='/analysis' element={<SpendAnalysisPage />}></Route>
        </Routes>
      </PopUpWindowContextProvider>
    </ThemeContextProvider>
    
  )
}

export default App
