import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBaby, faCoins, faDashboard, faGears, faHome, faMoneyBill } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="home_container">
      <div className="left">
        <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDAxAPFD7OhGWmsVEi7NkZMI17n-1rBX3tg&usqp=CAU" alt="avatar"/>
            <h4>Shady</h4>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={ faHome }/>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={ faMoneyBill }/>
                <span>Deposits</span>
              </a>
            </li>
             <li>
              <a href="/">
                <FontAwesomeIcon icon={ faCoins }/>
                <span>Expenses</span>
              </a>
            </li>
             <li>
              <a href="/">
                <FontAwesomeIcon icon={ faDashboard }/>
                <span>Dashboard</span>
              </a>
            </li>
             <li>
              <a href="/">
                <FontAwesomeIcon icon={ faGears }/>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">

      </div>
    </div>
  );
}

export default App;
