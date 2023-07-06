import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Admin_Home() {
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
                    <Typography component="h1" variant="h5" sx={{color: 'info.main'}}>
                        Admin
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                </Box>
            </Container>
    </>
  )
}

export default Admin_Home