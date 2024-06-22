import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import SideBar from '../Components/Admin/SideBar';
import Users from '../Components/Admin/Users/Users';
import HandBurgerMenu from '../Assets/Handburgermenu.svg'
import Chatboat from '../Components/Admin/Chatboat/Chatboat';

const AdminDashboard = () => {
    let UserMenues = [
        {
            name: "Dashboard",
            slug: "Home",
        },
        {
            name: "All Users",
            slug: "Users",
        },
        {
            name: "Add ChatBot",
            slug: "ChatBot",
        },
    ]
    let parms = useParams();
    let Tool = parms.tool
    let [drawer, setDrawer] = useState(true);
    let [userTool, setUserTool] = useState(Tool);
    return (
        <section className=''>
            <div className='flex flex-wrap '>
                <aside className='md:w-[20.83%] min-h-screen hidden md:flex flex-wrap flex-col gap-[66px] p-7 md:px-1 lg:px-[14px]  bg-[#1c2434] '>
                    <div className='logo flex justify-center items-center w-full border-[#F4EEED] border-b'>
                        <div className='logo-img w-[170px] h-[73px]'>
                        </div>
                    </div>
                    <div className='User-Menu-Options  xl:px-[10px]'>
                        <SideBar UserMenues={UserMenues} setUserTool={setUserTool} userTool={userTool}></SideBar>
                    </div>
                </aside>
                {/* 1140/1440 */}
                <div className='md:w-[79.16%] md:h-auto min-h-screen  bg-[#f1f5f9] w-full md:px-10 relative overflow-hidden'>
                    {/* 1069/1140 */}
                    <div className=' w-full '>
                        <div className=' Top-Bar pr-[45px] pl-[31px] flex justify-between items-center w-full h-[102px] border-b-[0.5px] border-[#414141]'>
                            <div className='Name text-[#1c2434] text-[32px] font-semibold leading-9'>Admin Dashboard</div>
                            <div className='user-Buttons hidden md:flex gap-7 items-center'>

                                <div className='userAccount flex gap-3 items-center'>
                                    <div className='Profile-Picture overflow-hidden xl:w-10 xl:h-10 lg:w-7 lg:h-7 w-5 h-5 border border-[#A0D9DB] bg-[white] rounded-full'>
                                        <img className='w-full object-cover' src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
                                    </div>
                                    <div className='user-name font-medium text-base'>Admin</div>
                                </div>
                            </div>
                            <div onClick={() => setDrawer(!drawer)} className='hand-burger-menu md:hidden flex'>
                                <img src={HandBurgerMenu}/>
                            </div>
                        </div>
                    </div>
                    {/* Side Drawer  */}
                    <div className={`w-full  ${drawer ? "ml-[100%]" : "-ml-[0]"} transition-all z-10 duration-300 absolute top-0 left-0 min-h-screen p-7 bg-[#1c2434]`}>
                        <div className=''>
                            <div className='logo  items-center flex justify-between'>
                                <img className='w-24' src="/LOGO.svg" alt="" />
                                <div onClick={() => setDrawer(!drawer)} className='cursor-pointer text-[#FAFAFA]'>X</div>
                            </div>
                            <div>
                                <ul className='flex flex-col list-none gap-4 text-left'>
                                    <li className='lg:pl-8 md:pl-0 px-5 py-[15px] hover:bg-[#4b5563]   rounded-xl group'>
                                        <Link className='font-normal xl:text-xl text-base flex items-center gap-4 text-[#dee4ee]' to={"/"}>
                                            <img
                                                className=' rounded-full xl:w-10 xl:h-10 lg:w-7 lg:h-7 w-5 h-5 object-cover'
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                                            />
                                            <span>Admin</span>
                                        </Link>
                                    </li>
                                    {
                                        UserMenues?.map((menu, indx) => {
                                            return (
                                                <li
                                                    onClick={() => setDrawer(!drawer)}
                                                    key={indx}
                                                    className={`${userTool === menu.slug ? "bg-[#4b5563] shadow-lg" : ""} xl:pl-8 md:pl-4 px-5 py-[16px] hover:bg-[#4b5563]  text-[#343434] hover:shadow-lg rounded-md group`}
                                                >
                                                    <Link
                                                        to={"/Admin Dashboard/" + menu.slug}
                                                        onClick={() => { setUserTool(menu.slug) }}
                                                        className='font-normal text-[#dee4ee]  xl:text-base md:text-sm text-[10px]  flex items-center md:gap-1 xl:gap-[17px]'
                                                    >
                                                        {
                                                            menu.name === "Dashboard" ?
                                                                <svg className='fill-current' width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                                    <path d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z" fill=""></path>
                                                                    <path d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z" fill=""></path>
                                                                    <path d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z" fill=""></path>
                                                                    <path d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z" fill=""></path>
                                                                </svg> :
                                                            menu.name === "All Users" ?
                                                                <svg className='fill-current' width="25" height="25" viewBox="0 0 24 24" fill="#dee4ee" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z" fill="#dee4ee" />
                                                                    <path d="M19.0206 3.48162C17.0806 1.54162 15.1806 1.49162 13.1906 3.48162L11.9806 4.69162C11.8806 4.79162 11.8406 4.95162 11.8806 5.09162C12.6406 7.74162 14.7606 9.86162 17.4106 10.6216C17.4506 10.6316 17.4906 10.6416 17.5306 10.6416C17.6406 10.6416 17.7406 10.6016 17.8206 10.5216L19.0206 9.31162C20.0106 8.33162 20.4906 7.38162 20.4906 6.42162C20.5006 5.43162 20.0206 4.47162 19.0206 3.48162Z" fill="#dee4ee" />
                                                                    <path d="M15.6103 11.5308C15.3203 11.3908 15.0403 11.2508 14.7703 11.0908C14.5503 10.9608 14.3403 10.8208 14.1303 10.6708C13.9603 10.5608 13.7603 10.4008 13.5703 10.2408C13.5503 10.2308 13.4803 10.1708 13.4003 10.0908C13.0703 9.81074 12.7003 9.45074 12.3703 9.05074C12.3403 9.03074 12.2903 8.96074 12.2203 8.87074C12.1203 8.75074 11.9503 8.55074 11.8003 8.32074C11.6803 8.17074 11.5403 7.95074 11.4103 7.73074C11.2503 7.46074 11.1103 7.19074 10.9703 6.91074C10.9491 6.86535 10.9286 6.82018 10.9088 6.77528C10.7612 6.44196 10.3265 6.34451 10.0688 6.60227L4.34032 12.3308C4.21032 12.4608 4.09032 12.7108 4.06032 12.8808L3.52032 16.7108C3.42032 17.3908 3.61032 18.0308 4.03032 18.4608C4.39032 18.8108 4.89032 19.0008 5.43032 19.0008C5.55032 19.0008 5.67032 18.9908 5.79032 18.9708L9.63032 18.4308C9.81032 18.4008 10.0603 18.2808 10.1803 18.1508L15.9016 12.4295C16.1612 12.1699 16.0633 11.7245 15.7257 11.5804C15.6877 11.5642 15.6492 11.5476 15.6103 11.5308Z" fill="#dee4ee" />
                                                                </svg> :
                                                            menu.name === "Add ChatBot" ?
                                                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke="#dee4ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M15 12C14.2005 12.6224 13.1502 13 12 13C10.8498 13 9.79952 12.6224 9 12" stroke="#dee4ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M9 8.01953V8" stroke="#dee4ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M15 8.01953V8" stroke="#dee4ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            :
                                                            null
                                                        }
                                                        <span>{menu.name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        Tool === "Users" ?
                        <Users /> :
                        Tool === "ChatBot" ?
                        <Chatboat /> :
                        <div className=''>loading...</div>
                    }
                </div>
            </div>
        </section>
    )
}
export default AdminDashboard