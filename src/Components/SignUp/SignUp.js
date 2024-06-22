import SignUpImage from '../../Assets/SignUp.svg'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    let navigate=useNavigate();
  return (
    <>
    <section className=' py-20 w-full  bg-[#f7f7f7]'>
        <div className='max-w-screen-xl lg:px-[90px] sm:px-24 px-4 m-auto '>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='sm:w-1/2 w-full'>
                    <img className='w-full' src={SignUpImage} alt="login" />
                </div>
                <div className='sm:w-[41%] w-full'>
                    <div className='login-text'>
                        <h1 className='font-bold text-[54px] text-[#191C29]'>Sign Up as Admin</h1>
                        <p className='mt-3 font-normal text-base text-[#667986]'>Lorem ipsum dolor sit amet adipiscing elit.</p>
                    </div>
                    <form className='mt-11 flex flex-col gap-4' action="">
                        <div>
                            <input type="text" placeholder='First Name' className='outline-none  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div>
                            <input type="text" placeholder='Last Name' className='outline-none  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div>
                            <input type="email" placeholder='Email' className='outline-none  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div>
                            <input type="password" placeholder='Password' className='outline-none  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div>
                            <input type="password" placeholder='Confirm Password' className='outline-none  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div>
                            <button className=' rounded-3xl leading-6 [#888888] bg-gradient-to-r from-indigo-500 to-blue-300 text-[#F7F7F7] w-full   py-4 text-sm text-center'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className='mt-4 gap-2 justify-center flex font-medium text-sm leading-5 text-[#191C29]'>
                        <p>Have account? </p>
                        <button 
                            onClick={()=>navigate("/Login")}
                            className='text-blue-400'
                        >
                            Sign In Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default SignUp