import React,{useState,useEffect} from 'react'
import { Box, Card, CardContent,Typography, Table, TableBody ,TableCell ,TableContainer ,TableHead ,TableRow ,Paper } from '@mui/material'
import axios from "axios"
import jwt_decode from "jwt-decode"

const OverViewMain = () =>{
    const [data, setData] = useState([])
    const user_id = jwt_decode(localStorage.getItem("token")).user_id

    useEffect (()=>{
        axios.get(
            "http://localhost:8080/expense/user/"+user_id
        ).then(
            (data)=> setData(data.data.data)
        ).catch(
            (err)=> console.log(err)
        )
    },[])
    
    return(
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
                    <Card sx={{width:"500px", m:2, p:2}}>
                        <CardContent>
                            <Typography sx={{ fontWeight:"600", fontSize: 14 }}color="text.secondary">
                                Total Expenses
                            </Typography>
                            <Typography sx={{ my:"20px",fontSize: 12, float:"right" }}color="text.secondary">
                                ... TND 
                            </Typography>
                        </CardContent>
                    </Card>
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
                    <Card sx={{width:"500px", m:2,p:2}}>
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
                <Box component="div" sx={{ p :2}}>
                    <Typography sx={{ fontWeight:"600", fontSize: 14, mb:2 }}color="text.secondary">
                        Last transactions
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell> ID </TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Type/ Nature</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.amount} TND</TableCell>
                                <TableCell align="right">Expense</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
        </div>
    )
}

export default OverViewMain