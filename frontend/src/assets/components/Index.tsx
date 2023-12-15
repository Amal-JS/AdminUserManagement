import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { AdminHome } from './AdminHome'
import { AdminLogin } from './AdminLogin'
import { UserEdit } from './UserEdit'
import { UserHome } from './UserHome'
import { UserLogin } from './UserLogin'
import { UserSignUp } from './UserSignUp'
export const Index =()=>{
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<UserHome/>}></Route>
                <Route path='admin'>
                    <Route index element={<AdminHome />}/>
                    <Route path="edit" element={<UserEdit/>}/>
                </Route>
                <Route path='/userLogin' element={<UserLogin/>}></Route>
                <Route path='/adminLogin' element={<AdminLogin/>}></Route>
                <Route path='/userSignUp' element={<UserSignUp/>}></Route>
            </Routes>
        </Router>
        </>
    )
}