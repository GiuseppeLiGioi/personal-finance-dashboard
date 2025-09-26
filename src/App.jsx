import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./assets/Pages/Dashboard";
import { transactionsData } from "./assets/utils/transactions";
import Header from './assets/Components/Header';
import Sidebar from './assets/Components/Sidebar';
import Settings from "./assets/Pages/Settings";
import Transactions from "./assets/Pages/Transactions"
import {translations} from "./assets/utils/translations"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
const [transactions, setTransactions] = useState(transactionsData);
const [language, setLanguage] = useState("it")


  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <Sidebar />
            <div className='col-md-10'>

              <Routes>
                <Route path="/" element={<Dashboard transactions={transactions} setTransactions={setTransactions}  language={language} setLanguage={setLanguage}/>} />
                <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions}  language={language} setLanguage={setLanguage}/>} />
                <Route path="settings" element={<Settings transactions={transactions} setTransactions={setTransactions} language={language} setLanguage={setLanguage}/>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
