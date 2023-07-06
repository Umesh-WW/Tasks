import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_page from './component/login_page';
import Admin from './component/admin';
import Manager from './component/manager';
import Customer from './component/customer';
import Error_page from './pages/error_page';
import Forgot_password from './component/forgot_password';
import Home from './pages/home';
import Custom from './component/custom';
import Profile from './pages/profile';
import Admin_user from './pages/admin_user';
import Dashboard from './pages/dashboard';
import Manager_Page from './pages/manager_page';
import Customer_Page from './pages/customer_page';
import Service2 from './pages/service2';
import Service1 from './pages/service1';
import User from './pages/user';
import Error from './pages/error';
import Nav_main from './component/nav_main';
import { useState, useEffect } from 'react';
import Page_404 from './pages/page_404';

function Router() {
    const [pathName, setPathName] = useState(window.location.pathname)
    console.log(pathName, "---pathName--->");
    const store = ["/", "/login_page", "/admin", "/customer", "/manager", "/admin_user", "/customer_page", "/dashboard", "/home", "/manager_page", "/profile", "/service1", "/service2", "/user"]

    return (
        <>
            {
                localStorage.length === 0 ? '' : <Nav_main />
            }
            <BrowserRouter>
                <Routes>
                    {
                        store.includes(pathName) ?
                            <>
                                <Route path='/' Component={Login_page} />
                                <Route path='/login_page' Component={Login_page} />
                                <Route path='/forgot_password' Component={Forgot_password} />
                                <Route path='/admin' Component={Error} />
                                <Route path='/manager' Component={Error} />
                                <Route path='/customer' Component={Error} />
                                <Route path='/custom' Component={Error} />
                            </> :
                            <>
                                <Route path='/:path' Component={Page_404} />
                            </>
                    }
                </Routes>
            </BrowserRouter>
            {/* // admin */}
            <BrowserRouter>
                <Routes>
                    {
                        localStorage.getItem('admin') === null ?
                            <><Route path='/*' Component={Error} /></>
                            :
                            <>
                                {
                                    store.includes(pathName) ?
                                        <>
                                            <Route path='/admin' Component={Admin} />
                                            <Route path='/home' Component={Home} />
                                            <Route path='/profile' Component={Profile} />
                                            <Route path='/admin_user' Component={Admin_user} />
                                            <Route path='/dashboard' Component={Dashboard} />
                                            <Route path='/user' Component={User} />
                                            <Route path='/service1' Component={Service1} />
                                            <Route path='/service2' Component={Service2} />
                                            {
                                                ["/manager", "/customer", "/custom"].includes(pathName) &&
                                                <>
                                                <Route path='*' Component={Error_page} />
                                                </>
                                            }
                                        </> :
                                        <>
                                            <Route path='/:path' Component={Page_404} />
                                        </>
                                }
                            </>
                    }
                </Routes>
            </BrowserRouter>
            {/* //manager */}
            <BrowserRouter>
                <Routes>
                    {
                        localStorage.getItem('manager') === null ?
                            <><Route path='/*' Component={Error} /></> :
                            <>
                                {
                                    store.includes(pathName) ?
                                        <>
                                            <Route path='/manager' Component={Manager} />
                                            <Route path='/home' Component={Home} />
                                            <Route path='/profile' Component={Profile} />
                                            <Route path='/dashboard' Component={Dashboard} />
                                            <Route path='/manager_page' Component={Manager_Page} />
                                            <Route path='/customer_page' Component={Customer_Page} />
                                            <Route path='/service1' Component={Service1} />
                                            <Route path='/admin' Component={Error_page} />
                                            <Route path='/customer' Component={Error_page} />
                                        </> :
                                        <>
                                            <Route path='/:path' Component={Page_404} />
                                        </>
                                }
                            </>
                    }
                </Routes>
            </BrowserRouter>
            {/* //customer */}
            <BrowserRouter>
                <Routes>
                    {
                        localStorage.getItem('customer') === null ?
                            <><Route path='/*' Component={Error} /></> :
                            <>
                                {
                                    store.includes(pathName) ?
                                        <>
                                            <Route path='/customer' Component={Customer} />
                                            <Route path='/home' Component={Home} />
                                            <Route path='/profile' Component={Profile} />
                                            <Route path='/service2' Component={Service2} />
                                            <Route path='/user' Component={User} />
                                            <Route path='/admin' Component={Error_page} />
                                            <Route path='/manager' Component={Error_page} />
                                            <Route path='/customer' Component={Error_page} />
                                        </> :
                                        <>
                                            <Route path='/:path' Component={Page_404} />
                                        </>
                                }
                            </>
                    }
                </Routes>
            </BrowserRouter>
            {/* //custom */}
            <BrowserRouter>
                <Routes>
                    {
                        localStorage.getItem('custom') === null ?
                            <><Route path='/*' Component={Error} /></> :
                            <>
                                {
                                    store.includes(pathName) ?
                                        <>
                                            <Route path='/custom' Component={Custom} />
                                            <Route path='/home' Component={Home} />
                                            <Route path='/profile' Component={Profile} />
                                            <Route path='/dashboard' Component={Dashboard} />
                                            <Route path='/manager_page' Component={Manager_Page} />
                                            <Route path='/customer_page' Component={Customer_Page} />
                                            <Route path='/service2' Component={Service2} />
                                            <Route path='/service1' Component={Service1} />
                                            <Route path='/user' Component={User} />
                                            <Route path='/manager' Component={Error_page} />
                                            <Route path='/customer' Component={Error_page} />
                                            <Route path='/admin' Component={Error_page} />
                                        </> :
                                        <>
                                            <Route path='/:path' Component={Page_404} />
                                        </>
                                }
                            </>
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router