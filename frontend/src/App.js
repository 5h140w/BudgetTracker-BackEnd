import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import {BrowserRouter , Routes , Route } from "react-router-dom"
import OverViewPage from './pages/HomePage/OverViewPage';
import ExpensesPage from './pages/ExpensesPage/ExpensesPage';
import AddExpensePage from './pages/AddExpensePage/AddExpensePage';
import DepositsPage from './pages/DepositsPage/DepositsPage';
import AddDepositPage from './pages/AddDepositPage/AddDepositPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          { localStorage.getItem("token")?
            <>
              <Route path="/overview" element={<OverViewPage/>}/>
              <Route path="/expenses" element={<ExpensesPage/>} />
              <Route path="/add_expense" element={<AddExpensePage/>} />
              <Route path="/deposits" element={<DepositsPage/>}/>
              <Route path="/add_deposit" element={<AddDepositPage/>} />
            </>:
            <>
              <Route path='/login' element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
            </>
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
