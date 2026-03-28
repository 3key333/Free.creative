import { Routes, Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'

export default function appRouter() {

    return(
        <Routes>
            <Route path='/' element={<AppLayout/>}/>
            <Route path='/portfolio' element={null}/>
            <Route path='*' element={<div><h1>404</h1></div>}/>
        </Routes>
    )

}