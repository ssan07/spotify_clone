import React, { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
// import Navbar from '../Components/Navbar/Navbar'


const Home = lazy(() => import('./Pages/Home/Home'))
const Login = lazy(() => import('./Pages/Login/Login'))


function App() {
  // const location = useLocation().pathname === '/';

  return (
    <>
      {/* {!location && <Navbar />} */}
      <Suspense fallback={<div className='w-screen items-center h-screen bg-black'><div className="text-center items-center bg-black text-white pt-10 text-xl font-bold">Loading...</div></div>}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
