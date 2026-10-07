import './App.css'
import { ThemeContextProvider } from './contexts/ThemeProvider';
import { HomePage } from './pages/HomePage'
import { Route, Routes } from "react-router";

function App() {

  return (
    <ThemeContextProvider>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </ThemeContextProvider>
    
  )
}

export default App
