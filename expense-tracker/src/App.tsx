import './App.css'
import { ThemeContextProvider } from './contexts/ThemeProvider';
import { HomePage } from './pages/HomePage'
import { Route, Routes } from "react-router";
import { TransactionsHistoryPage } from './pages/TransactionsHistoryPage';

function App() {

  return (
    <ThemeContextProvider>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/history' element={<TransactionsHistoryPage />}></Route>
      </Routes>
    </ThemeContextProvider>
    
  )
}

export default App
