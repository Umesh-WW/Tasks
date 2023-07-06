import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'


function Admin() {
    // const [selectedRoles, setSelectedRoles] = useState([])
    // useEffect(() => {
    //     const Roles = localStorage.getItem('Role');
    //     if (Roles) {
    //         setSelectedRoles(JSON.parse(Roles));
    //     }
    // }, [])
    return (
        <>
            {/* <>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Stack direction="row">
                            <Toolbar sx={{ flexGrow: 1 }}>
                                <Typography sx={{ mr: '20px' }} >
                                    <Link to='/home' className=' text-white text-decoration-none'>Home</Link>
                                </Typography>
                                <Typography sx={{ mr: '20px' }} >
                                    <Link to='/profile' className=' text-white text-decoration-none'>Profile</Link>
                                </Typography>
                                <Typography sx={{ mr: '20px' }} >
                                    <Link to='/admin_user' className=' text-white text-decoration-none'>Admin Only</Link>
                                </Typography>
                                <Typography sx={{ mr: '20px' }} >
                                    <Link to='/user' className=' text-white text-decoration-none'>User</Link>
                                </Typography>
                                <Typography sx={{ mr: '20px' }} >
                                    <Link to='/dashboard' className=' text-white text-decoration-none'>Deshboard</Link>
                                </Typography>
                                <Typography sx={{ mr: '20px' }} >
                                    <Link to='/service1' className=' text-white text-decoration-none'>Service1(m)</Link>
                                </Typography>
                                <Typography sx={{ mr: '20px' }} >
                                    <Link to='/service2' className=' text-white text-decoration-none'>Service2(c)</Link>
                                </Typography>
                            </Toolbar>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1, mb: 1, border: '1px solid white' }}
                                onClick={handleSubmit}
                            >
                                <Link to='/login_page' className=' text-white text-decoration-none'> Log Out</Link>
                            </Button>
                        </Stack>
                    </AppBar>
                </Box>
            </> */}
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

export default Admin