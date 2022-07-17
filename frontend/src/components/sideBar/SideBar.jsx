import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGears, faHome, faMoneyBill1Wave,faMoneyBillTransfer, faTablets} from "@fortawesome/free-solid-svg-icons"
import "./sidebar.css"

const SideBar = () =>{
    return(
        <div className='sidebar_section'>
            <section className='gn_section'>
                <img src="https://thumbs.dreamstime.com/b/profil-masculin-sans-visage-d-avatar-138078117.jpg" alt="logo"/>
                <h3>Name Family</h3>
            </section>
            <ul className='menu_section'>
                <li>
                    <a href="/overview">
                        <FontAwesomeIcon icon={faHome}/>
                        <span>Overview</span>
                    </a>
                </li>
                <li>
                    <a href="/expenses">
                        <FontAwesomeIcon icon={faMoneyBill1Wave}/>
                        <span>Expenses</span>
                    </a>
                </li>
                <li>
                    <a href="/add_expense">
                        <FontAwesomeIcon icon={faMoneyBill1Wave}/>
                        <span>Add Expense</span>
                    </a>
                </li>
                <li>
                    <a href="/deposits">
                        <FontAwesomeIcon icon={faMoneyBillTransfer}/>
                        <span>Deposits</span>
                    </a>
                </li>
                <li>
                    <a href="/login">
                        <FontAwesomeIcon icon={faTablets}/>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/login">
                        <FontAwesomeIcon icon={faGears}/>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
            <div className='sidebar_logout'>
                <button> logout</button>
            </div>
        </div>
    )
}

export default SideBar