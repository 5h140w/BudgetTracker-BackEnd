import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import OverViewPage from './pages/HomePage/OverViewPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/overview" element={<OverViewPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
