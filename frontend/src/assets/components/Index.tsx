import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { AdminHome } from './AdminHome'
import { UserHome } from './UserHome'
export const Index =()=>{
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<UserHome/>}></Route>
                <Route path='/adminHome' element={<AdminHome/>}></Route>
            </Routes>
        </Router>
        </>
    )
}