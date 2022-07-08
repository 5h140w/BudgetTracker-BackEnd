import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import RegisterForm from './components/registerForm/RegisterForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
