import './App.css'
import { ThemeContextProvider } from './contexts/ThemeProvider';
import { HomePage } from './pages/HomePage/HomePage'
import { Route, Routes } from "react-router";
import { TransactionsHistoryPage } from './pages/TransactionHistoryPage/TransactionsHistoryPage';
import { PopUpWindowContextProvider } from './contexts/PopUpWindowProvider';
import { SavingsPage } from './pages/SavingsPage/SavingsPage';
import { SpendAnalysisPage } from './pages/SpendAnalysisPage/SpendAnalysisPage';
import { ColorPickerProvider } from './contexts/ColorPickerProvider';
import { IconPickerProvider } from './contexts/IconPickerProvider';
import { StatusMessageProvider } from './contexts/StatusMessageProvider';


function App() {

  return (
    <ThemeContextProvider>
      <PopUpWindowContextProvider>
        <ColorPickerProvider>
          <IconPickerProvider>
            <StatusMessageProvider>
              <Routes>
                <Route index element={<HomePage />}></Route>
                <Route path='/history' element={<TransactionsHistoryPage />}></Route>
                <Route path='/savings' element={<SavingsPage />}></Route>
                <Route path='/analysis' element={<SpendAnalysisPage />}></Route>
              </Routes>
            </StatusMessageProvider>
          </IconPickerProvider>
        </ColorPickerProvider>
      </PopUpWindowContextProvider>
    </ThemeContextProvider>
    
  )
}

export default App
