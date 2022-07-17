import React from 'react'
import {Box, Typography,Button} from "@mui/material"

const DepositsMain = () =>{


    return(
        <div className='main'>
            <Box
                    sx={{
                        m:1,
                        p:1
                    }}
                >
                    <Typography component={"h1"} sx={{ fontWeight :"1000", fontSize:32}}>
                        Deposits
                    </Typography>
                    <Typography component={"p"} sx={{fontWeight:"600", fontSize:12,p:1, display:"block",float:"right"}}>
                        XX days
                    </Typography>
                    <Button size="small" variant="contained">Add Deposits</Button>
            </Box>
            
        </div>
    )
}

export default DepositsMain