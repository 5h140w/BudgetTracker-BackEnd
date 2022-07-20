import { Box } from '@mui/material'
import React, { useRef } from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"

const DashboardMain = () =>{

    const ref = useRef()
    
    return(
        <div className='main'>
            <Box sx={{m:1,p:1}}>
                <h1>Hello There</h1>
            </Box>
            <Box sx={{m:1,p:1}}> 
                <Line
                    datasetIdKey='id'
                    data={{
                        labels: ['Jun', 'Jul', 'Aug'],
                        datasets: [
                        {
                            id: 1,
                            label: 'one',
                            data: [5, 6, 7],
                        },
                        {
                            id: 2,
                            label: 'two',
                            data: [3, 2, 1],
                        },
                        ],
                    }}
                    />

            </Box>
        </div>
    )
}

export default DashboardMain