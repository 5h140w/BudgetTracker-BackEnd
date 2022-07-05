import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCoins, faHome, faInbox, faWallet} from "@fortawesome/free-solid-svg-icons"
import "./homepage.css"

const HomePage = () =>{
        return(
            <div className='home_container'>
                <div className='home'>
                    <div className="left_section">
                        <div className="top">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png"/>
                            <h3>Shady Belhadj</h3>
                        </div>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faHome}/>
                                <a>Home</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faWallet}/>
                                <a>Wallet</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCoins}/>
                                <a>Home</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHome}/>
                                <a>Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className="right_section">

                    </div>
                </div>
            </div>
        )
}   

export default HomePage