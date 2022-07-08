import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import {BrowserRouter , Routes , Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/register" element={"ok"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
