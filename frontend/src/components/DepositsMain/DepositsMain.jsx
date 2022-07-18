import React, {useEffect, useState} from 'react'
import {Box, Typography,Button, Card,CardContent, TableContainer,TableCell, TableRow,TableBody, TableHead,Paper, Table} from "@mui/material"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const DepositsMain = () =>{
    const[data, setdata] = useState([])
    const user_id = jwt_decode(localStorage.getItem("token")).user_id
    let navigate = useNavigate()

    useEffect(
        ()=>{
            axios.get("http://localhost:8080/deposit/user/"+user_id)
                .then(
                    (res)=>{
                        setdata(res.data)
                    }
                ).catch(
                    (err)=>{
                        console.log(err)
                    }
                )
        },[]
    )
    
    const redirect= () =>{
        navigate("/add_deposit")
    }

    return(
        <div className='main'>
            <Box sx={{m:1,p:1}}>
                <Typography component={"h1"} sx={{ fontWeight :"1000", fontSize:32}}>
                    Deposits
                </Typography>
                <Typography component={"p"} sx={{fontWeight:"600", fontSize:12,p:1, display:"block",float:"right"}}>
                    XX days
                </Typography>
                <Button size="small" variant="contained" onClick={redirect}>Add Deposits</Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:"center",
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}>
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
            <Box component="div" sx={{ p :2 }}>
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
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row,index) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {index}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.amount} TND</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default DepositsMain