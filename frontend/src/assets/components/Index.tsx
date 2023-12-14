import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { AdminHome } from './AdminHome'
import { AdminLogin } from './AdminLogin'
import { UserHome } from './UserHome'
import { UserLogin } from './UserLogin'
export const Index =()=>{
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<UserHome/>}></Route>
                <Route path='/adminHome' element={<AdminHome/>}></Route>
                <Route path='/userLogin' element={<UserLogin/>}></Route>
                <Route path='/adminLogin' element={<AdminLogin/>}></Route>
            </Routes>
        </Router>
        </>
    )
}