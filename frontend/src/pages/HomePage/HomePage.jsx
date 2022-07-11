import React from 'react'
import "./homepage.css"
import SideBar from "../../components/sideBar/SideBar"
import OverViewMain from '../../components/overviewMain/OverviewMain';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const HomePage = () =>{
    return(
        <>
            <SideBar/>
            <div className='main'>
                <OverViewMain/>
            </div>
        </>
    )
}

export default HomePage