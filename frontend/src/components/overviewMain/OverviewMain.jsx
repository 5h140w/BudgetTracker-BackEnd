import React from 'react'
import { Box, Card, CardContent,Typography, Table, TableBody ,TableCell ,TableContainer ,TableHead ,TableRow ,Paper } from '@mui/material'

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

const OverViewMain = () =>{
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
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
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