import { Box, TextField, Typography,FormControl,MenuItem , Button} from '@mui/material'
import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const AddExpenseMain = () =>{
    const [categories , setcategories] = useState([])
    const [name,setname] = useState("")
    const [amount,setamount] = useState("")
    const [category,setcategory]=useState("")
    const [description , setdescription] = useState("")
    let navigate = useNavigate()

    useEffect(
        ()=>{
            axios.get("http://localhost:8080/category/all")
                .then(
                    (data) => setcategories(data.data)
                ).catch(
                    (err)=> console.log(err)
                )
        },[]
    )

    const addExpense = (e) =>{
        e.preventDefault()
        const user = jwt_decode(localStorage.getItem("token")).user_id
        axios.post(
            "http://localhost:8080/expense",{
                name:name,
                description: description,
                amount: parseFloat(amount),
                category: category,
                user : user
            }
        ).then(
            (data) =>{
                alert(data.data.msg)
                setTimeout(
                    ()=>{
                        navigate("/overview")
                    },2000
                )
            }
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
                            placeholder="Enter the expense's amount"
                            variant="standard"
                            onChange={(e)=> setamount(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense" sx={{p:1, backgroundColor:"white"}}>
                        <TextField
                            select
                            label="Category"
                            helperText="Please select the expense's category"
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

export default AddExpenseMain