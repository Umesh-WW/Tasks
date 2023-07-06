import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Nav_main() {
    // const [pathName, setPathName] = useState(window.location.pathname)
    const handleSubmit = () => {
        localStorage.clear();
        window.location.href = './login_page'
        // navigate('/')
    }
    return (
        <>
            {/* display:`${pathName ==='/' |pathName ==='/login_page' ? 'none':'' }` */}
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
                            {
                                localStorage.getItem('admin') &&
                                <>
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
                                </>
                            }
                            {
                                localStorage.getItem('manager') &&
                                <>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/dashboard' className=' text-white text-decoration-none'>Dashboard</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/manager_page' className=' text-white text-decoration-none'>Manager</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/customer_page' className=' text-white text-decoration-none'>Customer</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/service1' className=' text-white text-decoration-none'>Service1(m)</Link>
                                    </Typography>
                                </>
                            }
                            {
                                localStorage.getItem('customer') &&
                                <>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/user' className=' text-white text-decoration-none'>User</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/service2' className=' text-white text-decoration-none'>Service2(c)</Link>
                                    </Typography>
                                </>
                            }
                            {
                                localStorage.getItem('custom') &&
                                <>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/dashboard' className=' text-white text-decoration-none'>Deshboard</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/manager_page' className=' text-white text-decoration-none'>Manager</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/customer_page' className=' text-white text-decoration-none'>Customer</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/user' className=' text-white text-decoration-none'>User</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/service1' className=' text-white text-decoration-none'>Service1(m)</Link>
                                    </Typography>
                                    <Typography sx={{ mr: '20px' }} >
                                        <Link to='/service2' className=' text-white text-decoration-none'>Service2(c)</Link>
                                    </Typography>
                                </>
                            }
                        </Toolbar>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 1, mb: 1, border: '1px solid white' }}
                            onClick={handleSubmit}
                        >
                            {/* <Link to='/' className=' text-white text-decoration-none'> Log Out</Link> */}
                            Log Out
                        </Button>
                    </Stack>
                </AppBar>
            </Box>
        </>
    )
}

export default Nav_main