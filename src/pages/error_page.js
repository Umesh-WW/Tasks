import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'


function Error_page() {
    const handleSubmit = () => {
        if (localStorage.getItem('admin')) {
            window.location.href = './admin'
        } else if (localStorage.getItem('manager')) {
            window.location.href = './manager'
        } else if (localStorage.getItem('customer')) {
            window.location.href = './customer'
        } else {
            window.location.href = './custom'
        }
    }
    return (
        <>
            <Container component="main" maxWidth="sm">
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
                        You are not authorized to access this Page
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ width: '10px' }}
                    >
                        BACK
                    </Button>
                    <Typography variant="body1" gutterBottom>
                        {"We are sorry but the page you are looking for does not exist."}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Error_page