import React from 'react'
import {Box, Typography} from "@mui/material"

const DashboardMain = () =>{
    
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


       </div>
    )
}

export default DashboardMain