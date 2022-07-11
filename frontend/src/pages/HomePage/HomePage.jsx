import React from 'react'
import "./homepage.css"
import SideBar from "../../components/sideBar/SideBar"
import OverViewMain from '../../components/overviewMain/OverviewMain';


const HomePage = () =>{
    return(
        <>
            <SideBar/>
            <OverViewMain/>
        </>
    )
}

export default HomePage