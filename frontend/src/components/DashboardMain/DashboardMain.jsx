import React from 'react'
import {Box, Typography} from "@mui/material"
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend } from 'chart.js'

const DashboardMain = () =>{
    
    Chart.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
        };

    return(
       <div className='main'>
            <Box sx={{p:1}}> 
                <Typography component="h1" sx={{ fontWeight :"1000", fontSize:32}}> 
                    Dashboard
                </Typography>
                <Typography component={"p"} sx={{fontWeight:"600", fontSize:12,p:1, display:"block",float:"right"}}>
                    XX days
                </Typography>
            </Box>
            <Box 
                sx={
                        {width:"400px",
                        height:"400px"
                    }}
            >
                <Doughnut 
                    
                    data={data}
                    
                />
            </Box>

       </div>
    )
}

export default DashboardMain