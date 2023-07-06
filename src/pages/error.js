import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    const handleSubmit = () => {
        // localStorage.clear();
        window.location.href='./login_page'
    }
    return (
        <><Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 6,
                    py: 8,
                    marginTop: 6,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography component="h1" variant="h5" sx={{ color: 'info.main' }}>
                    You can't Login
                </Typography>
                <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ width: '150px' }}
                    >
                        Login Page
                    </Button>
            </Box>
        </Container></>
    )
}

export default Error