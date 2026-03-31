import { Routes, Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import Portfolio from '../Components/PortfolioSection/Portfolio'

export default function AppRouter() {

    return(
        <Routes>
            <Route path='/' element={<AppLayout/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='*' element={<div><h1>404</h1></div>}/>
        </Routes>
    )

}