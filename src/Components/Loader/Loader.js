import React from 'react'

const Loader = () => {
  return (
    <div className='fixed flex items-center justify-center z-10 left-0 top-0 w-full h-full  bg-[#20202024] '>
          <span class="relative flex h-6 w-6">
            <span class="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          </span>
    </div>
  )
}

export default Loader