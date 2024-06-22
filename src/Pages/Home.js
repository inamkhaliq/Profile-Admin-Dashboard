import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate=useNavigate();
  return (
    <section>
        <div className='flex justify-center items-center h-screen w-full'>
            <button 
                className='rounded-lg text-[#FAFAFA] text-base font-normal py-2 px-4 bg-blue-400 '
                onClick={()=>navigate("/Login")}
            >Admin Dashboard</button>
        </div>
    </section>
  )
}

export default Home