import React from 'react'
import "./homepage.css"
import SideBar from "../../components/sideBar/SideBar"
import OverViewMain from '../../components/overviewMain/OverviewMain';


const OverViewPage = () =>{
    return(
        <>
            <SideBar/>
            <OverViewMain/>
        </>
    )
}

export default OverViewPage