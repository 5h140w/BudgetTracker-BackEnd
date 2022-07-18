import React, {useState,useEffect} from 'react'
import {Box, Typography , FormControl,Button, TextField, MenuItem } from "@mui/material"
import axios from 'axios'

const AddDepositMain = ()=>{
    const [categories , setcategories] = useState([])
    const [name,setname] = useState("")
    const [amount, setamount] = useState("")
    const [category,setcategory] = useState("")
    const [description,setdescription] = useState("")

    useEffect(
        ()=>{
            axios.get(
                "http://localhost:8080/category/deposit"
            ).then(
                (res)=>{
                    setcategories(res.data)
                }
            ).catch(
                (err)=>{
                    console.log(err)
                }
            )
        },[]
    )

    return(
        <div className="main">
            <Box sx={{ m:1, p:1 }}>
                <Typography component={"h1"} sx={{fontWeight:"1000", fontSize:32}}>
                    Add Deposit
                </Typography>
            </Box>
            <Box sx={{ p:2, m:1 }}>
                <Box component="form" sx={{margin:"auto", width:700, p:2, backgroundColor:"#fafafa", borderRadius: 5}}>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1 , backgroundColor:"white"}}>
                        <TextField
                            label="Name"
                            placeholder="Enter the deposit's name"
                            variant="standard"
                            onChange={(e)=> setname(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1, backgroundColor:"white"}}>
                        <TextField
                            type="number"
                            inputProps={{
                                step: "any"
                            }}
                            label="Amount"
                            placeholder="Enter the deposit's amount"
                            variant="standard"
                            onChange={(e)=> setamount(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1, backgroundColor:"white"}}>
                        <TextField
                            select
                            label="Category"
                            helperText="Please select the deposit's category"
                            variant="standard"
                            onChange={(e)=> setcategory(e.target.value)}
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
                            onChange={(e)=> setdescription(e.target.value)}
                        />
                    </FormControl>

                    <Button variant="contained" type="submit" sx={{my:2}}>
                        Submit
                    </Button>

                </Box>
            </Box>
        </div>
    )
}

export default AddDepositMain