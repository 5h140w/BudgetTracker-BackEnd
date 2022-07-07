import React from 'react'
import {Box, FormControl , TextField, Button} from '@mui/material';

const LoginForm = () =>{
    const handle = (e) =>{
        e.preventDefault()
        console.log("ok")
    }
    return(
        <Box
            sx={{
                p : 3
            }}
        > 
            <Box
                component="form"     
                noValidate
                autoComplete="off"
                onSubmit={handle}
            > 
                <FormControl 
                    fullWidth={true} 
                >
                    <TextField 
                        required
                            id="standard-required"
                            label="Email"
                            margin="normal"
                            variant="standard"
                            sx={{m : 2}}
                    />
                    <TextField 
                        required
                            id="standard-required"
                            label="Password"
                            type="password"
                            variant="standard"
                            margin="normal" 
                            sx={{m : 2}}
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        sx={{m : 2}}
                    >
                        Submit
                    </Button>

                </FormControl>
            </Box>
        </Box>
    )
}

export default LoginForm