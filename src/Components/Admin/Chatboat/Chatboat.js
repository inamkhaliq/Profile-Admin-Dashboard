import { useEffect, useState } from 'react'
import uploadIcon from '../../../Assets/UploadFiles.svg'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader'

const Chatboat = () => {
  let [loader,setLoader]=useState(false)
  let Submitform=()=>{
    setLoader(!loader)
    setTimeout(()=>{
      setLoader(false)
    },2000)

    
  }
  return (
    <section>
      {loader?<Loader/>:""}
      <div className='Tool-work-banch px-4 md:px-0 py-10'>
        <div className='heading'>
          <h1 className='font-semibold text-3xl leading-8 text-left text-[#1c2434]'>AI Chatboat</h1>
        </div>
        <div>
          <div>
            <form action="" className='gap-[29px] flex flex-col flex-wrap mt-6'>
              <div className='w-full flex flex-col gap-[29px]'>
                <div className='w-full text-left flex flex-col gap-[7px] '>
                  <label className=' font-normal text-[#000000] text-xl leading-6'>Website URL</label>
                  <input type="text" placeholder='Enter Website URL' className='bg-transparent text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                </div>
                <div className='w-full text-left flex flex-col gap-[7px] '>
                  <label className=' font-normal text-[#000000] text-xl leading-6'>Mobile No.</label>
                  <input type="text" placeholder='Enter Mobile No' className='bg-transparent text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                </div>
                <div className='w-full text-left flex flex-col gap-[7px] '>
                  <label className=' font-normal text-[#000000] text-xl leading-6'>Whats App API Key</label>
                  <input type="text" placeholder='Enter WhatsApp API key' className='bg-transparent text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                </div>
                <div className='w-full text-left flex flex-col gap-[7px] '>
                  <label className=' font-normal text-[#000000] text-xl leading-6'>Description</label>
                  <textarea type="text" placeholder='Enter Descriptions' className='bg-transparent text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                </div>
                <div className='w-full flex'>
                  <input type="file" id='fileselection' className='hidden ' />
                  <label htmlFor='fileselection' className='w-auto flex gap-[10px] py-3 px-8 bg-[#353535] rounded-[40px] font-normal text-[#F7F7F7] text-sm leading-[15px]'>
                    <span className='w-[14px] h-[14px]'><img className='w-full' src={uploadIcon}/></span>
                    <span>Browse Files</span>
                  </label>
                </div>
              </div>
              <div className='w-full flex  gap-[18px]'>
                <div className='text-left'>
                  <Link 
                    onClick={Submitform}
                    className='shadow-lg  text-right py-3 px-[25px] cursor-pointer font-normal text-sm text-[#F7F7F7] bg-[#0069FF]  rounded-[40px]' >
                    Submit
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chatboat