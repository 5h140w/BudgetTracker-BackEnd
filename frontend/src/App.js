import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/> 
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
