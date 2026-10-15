import './App.css'
import { ThemeContextProvider } from './contexts/ThemeProvider';
import { HomePage } from './pages/HomePage'
import { Route, Routes } from "react-router";
import { TransactionsHistoryPage } from './pages/TransactionsHistoryPage';
import { PopUpWindowContextProvider } from './contexts/PopUpWindowProvider';

function App() {

  return (
    <ThemeContextProvider>
      <PopUpWindowContextProvider>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path='/history' element={<TransactionsHistoryPage />}></Route>
        </Routes>
      </PopUpWindowContextProvider>
    </ThemeContextProvider>
    
  )
}

export default App
