import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import LoginPage from './pages/loginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"ok"}/> 
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
