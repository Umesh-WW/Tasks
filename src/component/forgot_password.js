import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Forgot_password() {
    return (

        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 8,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: 'info.main'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Forgot Password?
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}

                        >
                            Reset Password
                        </Button>
                        <Grid container item xs>
                            <Link to='/login_page' className='text-decoration-none'> Back to Log in</Link>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Forgot_password