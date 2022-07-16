import { Box, TextField, Typography,FormControl } from '@mui/material'
import React from 'react'

const AddExpenseMain = () =>{
    return(
        <div className='main'>
            <Box sx={{ m:1, p:1 }}
            >
                <Typography component={"h1"} sx={{fontWeight:"1000", fontSize:32}}>
                    Add Expense
                </Typography>
            </Box>
            <Box sx={{ p:2, m:1 }}>
                <Box component="form" sx={{margin:"auto", width:700}}>
                    <FormControl fullWidth={true} margin="dense">
                        <TextField
                            label={"Text Value"} //optional
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense">
                        <TextField
                            label={"Text Value"} //optional
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense">
                        <TextField
                            label={"Text Value"} //optional
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="dense">
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