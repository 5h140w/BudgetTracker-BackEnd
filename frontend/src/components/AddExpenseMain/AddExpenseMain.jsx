import { Box, TextField, Typography,FormControl,MenuItem } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import axios from "axios"

const AddExpenseMain = () =>{
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
    const categ
    useEffect(
        ()=>{
            axios.get("http://localhost:8080/category/all")
                .then(
                    (data) => console.log(data.data)
                )
        },[]
    )
    return(
        <div className='main'>
            <Box sx={{ m:1, p:1 }}
            >
                <Typography component={"h1"} sx={{fontWeight:"1000", fontSize:32}}>
                    Add Expense
                </Typography>
            </Box>
            <Box sx={{ p:2, m:1 }}>
                <Box component="form" sx={{margin:"auto", width:700, p:2, backgroundColor:"#fafafa", borderRadius: 5}}>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1 , backgroundColor:"white"}}>
                        <TextField
                            label="Name"
                            placeholder="Enter the expense's name"
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1, backgroundColor:"white"}}>
                        <TextField
                            type="number"
                            label="Amount"
                            placeholder="Enter the expense's amount"
                            variant="standard"
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1, backgroundColor:"white"}}>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Category"
                            helperText="Please select the expense's category"
                            variant="standard"
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1, backgroundColor:"white"}}>
                        <TextField
                            label={"Text Value"} //optional
                        />
                    </FormControl>
                </Box>
            </Box>
        </div>
    )
}

export default AddExpenseMain