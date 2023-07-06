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
import { useState} from 'react';
import Page_404 from './pages/page_404';

function App() {
  const [pathName] = useState(window.location.pathname)
  console.log(pathName, "---pathName--->");
  const store = ["/", "/login_page", "/admin", "/customer", "/manager", "/admin_user", "/customer_page", "/dashboard", "/home", "/manager_page", "/profile", "/service1", "/service2", "/user"]
  const admin = ["/admin", "/admin_user", "/dashboard", "/home", "/profile", "/service1", "/service2", "/user"]
  const manager = ["/manager", "/customer_page", "/dashboard", "/home", "/manager_page", "/profile", "/service1"]
  const customer = ["/customer", "/home", "/profile", "/service1", "/user"]
  const custom = ["/custom", "/admin_user", "/customer_page", "/dashboard", "/home", "/manager_page", "/profile", "/service1", "/service2", "/user"]
  // const user=["/admin","/manager","customer","custom"]
  return (
    <>
      <BrowserRouter>
        {/* { pathName === '/' || pathName === '/login_page' ? '' : <Nav_main />} */}
        {
          localStorage.length === 0 ? '' : <Nav_main />
        }
        <Routes>
          {
            localStorage.length === 0 &&
            <>
              <>
                <Route path='/' Component={Login_page} />
                <Route path='/login_page' Component={Login_page} />
                <Route path='/forgot_password' Component={Forgot_password} />
              </>
              <>
                {
                  store.includes(pathName) ?
                    <>
                      <Route path={pathName} Component={Error} />
                    </> :
                    <>
                      <Route path='*' Component={Page_404} />
                    </>
                }
              </>
            </>
          }
          {
            localStorage.getItem('admin') &&
            <>
              {
                admin.includes(pathName) &&
                <>
                  <Route path='/admin' Component={Admin} />
                  <Route path='/home' Component={Home} />
                  <Route path='/profile' Component={Profile} />
                  <Route path='/admin_user' Component={Admin_user} />
                  <Route path='/dashboard' Component={Dashboard} />
                  <Route path='/user' Component={User} />
                  <Route path='/service1' Component={Service1} />
                  <Route path='/service2' Component={Service2} />
                </>
              }
            </>
          }
          {
            localStorage.getItem('manager') &&
            <>
              {
                manager.includes(pathName) &&
                <>
                  <Route path='/manager' Component={Manager} />
                  <Route path='/home' Component={Home} />
                  <Route path='/profile' Component={Profile} />
                  <Route path='/dashboard' Component={Dashboard} />
                  <Route path='/manager_page' Component={Manager_Page} />
                  <Route path='/customer_page' Component={Customer_Page} />
                  <Route path='/service1' Component={Service1} />
                </>
              }
            </>
          }
          {
            localStorage.getItem('customer') &&
            <>
              {
                customer.includes(pathName) &&
                <>
                  <Route path='/customer' Component={Customer} />
                  <Route path='/home' Component={Home} />
                  <Route path='/profile' Component={Profile} />
                  <Route path='/service2' Component={Service2} />
                  <Route path='/user' Component={User} />
                </>
              }
            </>
          }
          {
            localStorage.getItem('custom') &&
            <>
              {
                custom.includes(pathName) &&
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
                </>
              }
            </>
          }
          {
            store.includes(pathName) ?
              <>
                <Route path={pathName} Component={Error_page} />
              </> :
              <>
                <Route path='*' Component={Page_404} />
              </>
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
