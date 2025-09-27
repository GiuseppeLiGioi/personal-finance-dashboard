import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./assets/Pages/Dashboard";
import { transactionsData } from "./assets/utils/transactions";
import Header from './assets/Components/Header';
import Sidebar from './assets/Components/Sidebar';
import Settings from "./assets/Pages/Settings";
import Transactions from "./assets/Pages/Transactions"
import { translations } from "./assets/utils/translations"
import { useLocalStorage } from './assets/hooks/useLocalStorage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [name, setName] = useLocalStorage("userName", "");
  const [email, setEmail] = useLocalStorage("userEmail", "");
  const [password, setPassword] = useLocalStorage("userPassword", "");
  const [confirmPassword, setConfirmPassword] = useLocalStorage("userConfirmPassword", "");
  const [language, setLanguage] = useLocalStorage("appLanguage", "it")
  const [theme, setTheme] = useLocalStorage("appTheme", "light");


  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <Sidebar
              name={name}
              setName={setName}
              theme={theme}
            />
            <div className='col-md-10'>

              <Routes>
                <Route path="/" element={<Dashboard transactions={transactions} setTransactions={setTransactions} language={language} setLanguage={setLanguage} />} />
                <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions} language={language} setLanguage={setLanguage} />} />
                <Route path="settings" element={<Settings transactions={transactions} setTransactions={setTransactions} language={language} setLanguage={setLanguage}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  confirmPassword={confirmPassword}
                  setConfirmPassword={setConfirmPassword}
                  theme={theme}
                  setTheme={setTheme}
                  />} />
              </Routes>
              <ToastContainer position='bottom-center' autoClose={3000} />
            </div>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
