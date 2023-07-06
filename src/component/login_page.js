import { Box, Button, Container, FormControl, Link, Select, Stack, Typography} from '@mui/material'
import React, { useState } from 'react'

function Login_page() {
    const [selectVal, setSelectVal] = useState([])

    const role = ['Admin', 'Manager', 'Customer']

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(selectVal, "------------>");
        // localStorage.setItem('Role',JSON.stringify(selectVal))
        if (selectVal.length === 1) {
            selectVal.map((item) => {
                if (item === 'Admin') {
                    localStorage.setItem('admin', true)
                    window.location.href = "./admin"    
                } else if (item === 'Manager') {
                    localStorage.setItem('manager', true)
                    window.location.href = "./manager"
                } else if (item === 'Customer') {
                    localStorage.setItem('customer', true)
                    window.location.href = "./customer"
                }
            })
        } else {
            localStorage.setItem('custom', true)
            window.location.href = "./custom"
        }
    }
    // const handleChange = (e) => {
    //     const { options } = e.target;
    //     const value = [];
    // for (let i = 0; i < options.length; i++) {
    //     if (options[i].selected) {
    //         value.push(options[i].length);
    //     }
    // })
    // setSelectVal(value);
    // console.log(selectVal, "---------->######");
    // }
    const handleChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectVal(selectedOptions);
    };
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
                        color: 'info.main'

                    }}
                >
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
                        <Typography component="h5" variant="h6">
                            Select Role:
                        </Typography>
                        <Select
                            multiple
                            native
                            value={selectVal}
                            onChange={handleChange}
                        >
                            {role.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <Box sx={{
                        width: 500,
                        height: 50,
                    }}>
                        <Stack direction="row" spacing={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Login
                            </Button>

                            <Typography component="h1" variant="h6">
                                <Link href="/forgot_password" variant="body2" sx={{ ml: '200px' }}>
                                    Forgot password
                                </Link>
                                {/* </Typography>
                                <Typography component="h1" variant="h6"> */}
                                <Link href="#" variant="body2" sx={{ ml: 3 }}>
                                    Register
                                </Link>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Container >
        </>
    )
}


export default Login_page