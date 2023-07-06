import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

function Page_404() {
    const handleSubmit = () => {
        if (localStorage.getItem('admin')) {
            window.location.href = '/admin'
        } else if (localStorage.getItem('manager')) {
            window.location.href = '/manager'
        } else if (localStorage.getItem('customer')) {
            window.location.href = '/customer'
        } else {
            window.location.href = '/custom'
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
                        404
                        This page does not exist
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ width: '250px' }}
                    >
                        GO TO Home Page
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default Page_404