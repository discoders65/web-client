import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import RootLayout from './Layout/RootLayout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';


const App= () => {


  return (
<main className="bg-[#010b00] h-screen w-full">

<Router>
<Routes>

<Route element={<RootLayout/>}>
  <Route path="/*" element={<Home/>}  />
<Route path="/404" element={<ErrorPage/>}/>


</Route>





</Routes>
</Router>
</main>

  )
}

export default App
