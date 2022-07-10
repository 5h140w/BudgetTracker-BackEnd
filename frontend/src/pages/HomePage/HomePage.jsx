import React from 'react'
import "./homepage.css"
import SideBar from "../../components/sideBar/SideBar"
import { Box, Card, CardContent,Typography } from '@mui/material'

const HomePage = () =>{
    return(
        <>
            <SideBar/>
            <div className='main'>
                <h1>Welcome User</h1>
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
                    <Card sx={{width:"400px", m:2}}>
                        <CardContent>
                            <Typography sx={{ fontWeight:"600", fontSize: 14 }}color="text.secondary">
                                Total Expenses
                            </Typography>
                            <Typography sx={{ my:"20px",fontSize: 12, float:"right" }}color="text.secondary">
                                ... TND 
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"400px", m:2}}>
                        <CardContent>
                            <Typography sx={{ fontWeight:"600", fontSize: 14 }}color="text.secondary">
                                Total Deposits
                            </Typography>
                            <Typography sx={{ my:"20px",fontSize: 12, float:"right" }}color="text.secondary">
                                ... TND
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"400px", m:2}}>
                        <CardContent>
                            <Typography sx={{ fontWeight:"600", fontSize: 14 }}color="text.secondary">
                                Balance
                            </Typography>
                            <Typography sx={{ my:"20px",fontSize: 12, float:"right" }}color="text.secondary">
                                ... TND
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        </>
    )
}

export default HomePage