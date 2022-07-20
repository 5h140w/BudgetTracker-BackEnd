import { Box } from '@mui/material'
import React, { useRef } from 'react'
import { CChart, CChartLine } from "@coreui/react-chartjs"

const DashboardMain = () =>{

    const ref = useRef()
    
    return(
        <div className='main'>
            <Box sx={{m:1,p:1}}>
                <h1>Hello There</h1>
            </Box>
            <Box sx={{m:1,p:1}}>
                <CChartLine
                    ref={ref}
                    type="line" 
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "rgba(220, 220, 220, 0.2)",
                            borderColor: "rgba(220, 220, 220, 1)",
                            pointBackgroundColor: "rgba(220, 220, 220, 1)",
                            pointBorderColor: "#fff",
                            data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "rgba(151, 187, 205, 0.2)",
                            borderColor: "rgba(151, 187, 205, 1)",
                            pointBackgroundColor: "rgba(151, 187, 205, 1)",
                            pointBorderColor: "#fff",
                            data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                        },
                        ],
                    }}
                />
            </Box>
        </div>
    )
}

export default DashboardMain