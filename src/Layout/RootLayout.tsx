import React from 'react'
import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <div className='h-screen w-full'>

<section>
    <Outlet/>
</section>


    </div>
  )
}

export default RootLayout