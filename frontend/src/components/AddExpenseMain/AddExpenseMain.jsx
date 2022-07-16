import { Box, TextField, Typography,FormControl,MenuItem , Button} from '@mui/material'
import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"

const AddExpenseMain = () =>{
    const [categories , setcategories] = useState([])
    
    useEffect(
        ()=>{
            axios.get("http://localhost:8080/category/all")
                .then(
                    (data) => setcategories(data.data)
                )
        },[]
    )

    addExpense = () =>{
        axios.post(
            "http://localhost:8080/expense"
        ).then(
            (data) =>console.log(data)
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    }

    return(
        <div className='main'>
            <Box sx={{ m:1, p:1 }}
            >
                <Typography component={"h1"} sx={{fontWeight:"1000", fontSize:32}}>
                    Add Expense
                </Typography>
            </Box>
            <Box sx={{ p:2, m:1 }}>
                <Box component="form" sx={{margin:"auto", width:700, p:2, backgroundColor:"#fafafa", borderRadius: 5}} onSubmit={addExpense}>
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
                            select
                            label="Category"
                            helperText="Please select the expense's category"
                            variant="standard"
                        >
                        {categories.map((option) => (
                            <MenuItem key={option._id} value={option._id}>
                                {option.name}
                            </MenuItem>
                        ))}
                        </TextField>
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1, backgroundColor:"white"}}>
                        <TextField
                            label="Description"
                            multiline
                            rows={4}
                            variant="standard"
                        />
                    </FormControl>

                    <Button variant="contained" type="submit">Contained</Button>

                </Box>
            </Box>
        </div>
    )
}

export default AddExpenseMain