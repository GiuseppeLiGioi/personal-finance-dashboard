import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./assets/pages/Dashboard"
import Header from './assets/Components/Header';
import Sidebar from './assets/Components/Sidebar';
import Settings from "./assets/pages/Settings"
import Transactions from "./assets/pages/Transactions"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


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
                <Route path="/transactions" element={<Transactions />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
