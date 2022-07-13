import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import OverViewPage from './pages/HomePage/OverViewPage';
import ExpensesPage from './pages/ExpensesPage/ExpensesPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/overview" element={<OverViewPage/>}/>
          <Route path="/expenses" element={<ExpensesPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
