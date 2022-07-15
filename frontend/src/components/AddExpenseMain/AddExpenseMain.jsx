import { Box, TextField, Typography } from '@mui/material'
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
                <Box component="form">
                    <TextField
                        label={"Text Value"} //optional
                    />
                    <TextField
                        label={"Text Value"} //optional
                    />
                </Box>
            </Box>
        </div>
    )
}

export default AddExpenseMain