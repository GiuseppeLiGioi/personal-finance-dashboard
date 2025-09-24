import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./assets/pages/Dashboard"
import { transactionsData } from "./utils/transactions";
import Header from './assets/Components/Header';
import Sidebar from './assets/Components/Sidebar';
import Settings from "./assets/Pages/Settings";
import Transactions from "./assets/Pages/Transactions"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
const [transactions, setTransactions] = useState(transactionsData);


  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <Sidebar />
            <div className='col-md-10'>

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions}  />} />
                <Route path="settings" element={<Settings transactions={transactions} setTransactions={setTransactions}/>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
