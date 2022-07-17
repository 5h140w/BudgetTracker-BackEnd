import React from 'react'
import {Box, Typography,Button, Card,CardContent} from "@mui/material"

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
            <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent:"center",
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    <Card sx={{width:"500px", m:2, p:2}}>
                        <CardContent>
                            <Typography sx={{ fontWeight:"600", fontSize: 14 }}color="text.secondary">
                                Total Deposits
                            </Typography>
                            <Typography sx={{ my:"20px",fontSize: 12, float:"right" }}color="text.secondary">
                                ... TND 
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"500px", m:2, p:2}}>
                        <CardContent>
                            <Typography sx={{ fontWeight:"600", fontSize: 14 }}color="text.secondary">
                                Total Deposits Per Month
                            </Typography>
                            <Typography sx={{ my:"20px",fontSize: 12, float:"right" }}color="text.secondary">
                                ... TND 
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                
        </div>
    )
}

export default DepositsMain