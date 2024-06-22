import React, { useState } from 'react'
import UsersTable from '../Table/UsersTable'

const Users = () => {
    let All_Users = [
        {
            id: 10001,
            Name: "Sohaib",
            Email: "Sohaib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10002,
            Name: "Ahmad",
            Email: "Ahmad@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10003,
            Name: "Shaheer",
            Email: "Shaheer@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Pending",
        },
        {
            id: 10004,
            Name: "Hurrair",
            Email: "Hurrair@gmail.com",
            Profile: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10005,
            Name: "Zahra",
            Email: "Zahra@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10006,
            Name: "Misbah",
            Email: "Misbah@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10007,
            Name: "Minahil",
            Email: "Minahil@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10008,
            Name: "Akbar",
            Email: "Akbar@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10009,
            Name: "Ali",
            Email: "Ali@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10010,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10011,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10012,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10013,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10014,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10015,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10016,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10017,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10018,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10019,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10020,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10021,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10022,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10023,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
        {
            id: 10024,
            Name: "Saqib",
            Email: "Saqib@gmail.com",
            Profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Status: "Active",
        },
    ]
    let [currentPage, setCurrentPage] = useState(1);
    let [postPerPage, setPostPerPage] = useState(10);
    let lastPostIndx = currentPage * postPerPage;
    let firstPostIndx = lastPostIndx - postPerPage;
    let Users = All_Users.slice(firstPostIndx, lastPostIndx)
    let pages = [];
    for (let i = 1; i <= Math.ceil(All_Users.length / postPerPage); i++) {
        pages.push(i);
    }
    return (
        <section>
            <div className='Tool-work-banch px-4 md:px-0 py-10'>
                <div className='heading'>
                    <h1 className='font-semibold text-3xl leading-8 text-left text-[#1c2434]'>All Users</h1>
                </div>
                <div className='table-Content overflow-auto mt-[25px]'>
                    <UsersTable data={Users} />
                </div>
                <div className='table-pagination flex flex-wrap gap-5 justify-between items-center text-sm font-medium  rounded-md py-5'>
                    <button
                        className='mx-4 px-4 py-2 border-gray-300 border rounded-lg'
                        onClick={() =>{if (currentPage > 1)setCurrentPage(currentPage - 1)}}
                    >Previous</button>
                    <div className='text-left w-full sm:w-auto '>
                        {
                            pages.map((page) => (
                                <button 
                                    className={`${page == currentPage ? "bg-slate-300" : ""} py-2 px-4 mx-2 hover:bg-slate-300 rounded-3xl `}
                                    onClick={() =>setCurrentPage(page)}
                                >{page}</button>
                            ))
                        }
                        Pages
                    </div>
                    <button
                        className='mx-5 px-4 py-2 border-gray-300 border rounded-lg'
                        onClick={() => {if (currentPage < Math.ceil(All_Users.length / postPerPage))setCurrentPage(currentPage + 1)}}
                    >Next</button>
                </div>
            </div>
        </section>
    )
}

export default Users