import React, { useState } from 'react';
import menusvg from "../../Assets/menu-alt-svgrepo-com.svg";
// import rightscg from "../../Assets/right.svg";
import closeSvg from "../../Assets/cross-svgrepo-com (1).svg"; // Add a close icon for the menu
// import facebooksvg from "../assets/facebook-svgrepo-com.svg";
// import linkedinsvg from "../assets/linkedin-svgrepo-com.svg";
// import instasvg from "../assets/instagram-svgrepo-com.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>

      <div className='absolute right-0   text-white bg-transparent w-full'>
        <div className='flex justify-between p-8'>
          <h1 className="logo text-4xl font-bold">Regner <span className='text-[#ffc107]'>Digitals</span></h1>
          <div className="right flex gap-4">
            <button className='text-xl hidden md:flex font-bold border p-3 rounded-full gap-4 justify-center items-center hover:bg-white hover:text-black transition duration-300'>
              Our Portfolio 
              {/* <img src={rightscg} className='w-8' /> */}
            </button>
            <button className='text-xl font-bold border hidden md:flex p-3 rounded-full gap-4 justify-center items-center hover:bg-white hover:text-black transition duration-300'>
              Start a Project 
              {/* <img src={rightscg} className='w-8' /> */}
            </button>
            <img src={menusvg} className='w-10 block cursor-pointer' onClick={toggleMenu} />
          </div>
        </div>

      </div>

      {/* Sliding Menu */}
      <div className={`h-full overflow-scroll bg-slate-500 fixed top-0 right-0 z-20 opacity-100   md:w-2/6  bg-white text-[#a4a3a6] shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className='p-8 flex flex-col '>
          <img src={closeSvg} className='w-8 self-end cursor-pointer' onClick={toggleMenu} />
          <ul className='text-center flex flex-col gap-4'>
            <li className='font-bold text-2xl'>Home</li>
            <li className='font-bold text-2xl'>About Us</li>
            <li className='font-bold text-2xl'>Contact US</li>
          </ul>
          <div className="ok my-12 flex flex-col justify-center items-center gap-6 center">
            <h1 className='text-black text-center font-bold text-4xl'>HAVE a PROJECT for US ?</h1>
            <button className='text-xl  text-black font-bold border p-3 rounded-full flex justify-center items-center hover:bg-black hover:text-white transition duration-300'>
              Our Portfolio
            </button>
          </div>
          <div className="icons flex justify-center items-center gap-6">
            {/* <img src={facebooksvg} className=' cursor-pointer w-16 rounded-full hover:bg-black border p-2' />
            <img src={linkedinsvg} className=' cursor-pointer w-16 rounded-full hover:bg-black border p-2' />
            <img src={instasvg} className=' cursor-pointer w-16 rounded-full hover:bg-black border p-2' /> */}
          </div>
          <div className="btns flex flex-wrap justify-center items-center gap-6 my-4">
            <button className='w-full text-xl md:hidden font-bold border p-3 rounded-full  hover:bg-black hover:text-white transition duration-300'>
              Our Portfolio
            </button>
            <button className='w-full text-xl md:hidden  font-bold border p-3 rounded-full  hover:bg-black hover:text-white transition duration-300'>
              Start a Project
            </button> 
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
