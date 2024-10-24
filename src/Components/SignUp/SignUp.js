import axios from 'axios';
import SignUpImage from '../../Assets/SignUp.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const SignUp = () => {
    let navigate=useNavigate();    
    const form=useForm({
        defaultValues:{
            _LastName:"inam"
        }
    });
    let {register,handleSubmit,formState:{errors},watch}=form;

    // Handle From
    let getformData=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const formdata=Object.fromEntries(data.entries());
        // console.log(formdata);
        axios.post("/api/saveformdata",formdata).then((result)=>{
            console.log(result.data)

        }).catch((err)=>{
            console.log(err)
        })
    }
    // Handle Form using RHF
    let formData=(data)=>{
        if(data){
            console.log(data);
            axios.post("/api/signup",data).then((res)=>{
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            });

            // FESCO BILL API          

            // axios.get("https://bill.pitc.com.pk/styles/gbPrint.css").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/styles/normalize.css").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/styles/genbill.css").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/styles/img-zoom/multizoom.css").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/js/JsBarcode.all.min.js").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/images/companies/fesco/fescoLogo.png").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/images/cuthere.gif").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/js/jquery-3.6.0.min.js").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/js/implementation_zoomJs.js").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });
            // axios.get("https://bill.pitc.com.pk/js/multizoom.js").then((response)=>{
            //     console.log(response.data)
            // }).catch((error)=>{
            //     console.log(error)
            // });            
        }
    }
    // console.log(errors)
    // console.log(watch(["_Password","_ConfirmPassword"]))
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
                    <form onSubmit={handleSubmit(formData)} className='mt-11 flex flex-col gap-4 ' action="">
                        
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._FirstName?.message}</p>
                            <input type="text" {...register('_FirstName',{required:{value:true,message:"First Name is required"}})} placeholder='First Name' className='outline-none mt-4  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._LastName?.message}</p>
                            <input type="text" {...register('_LastName',{required:{value:true,message:"Last Name is required"}})} placeholder='Last Name' className='outline-none mt-4  border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._Email?.message}</p>
                            <input type="email" 
                                {...register('_Email',
                                    {
                                        required:{
                                            value:true,
                                            message:"Email is required"
                                        },
                                        validate:{
                                            notAdmin:(fValue)=>{
                                                return (fValue!=="admin@gmail.com" || "Enter Different Email")
                                            }
                                            // matchPatern:(value)=> /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value),
                                            // message:"please enter valid email address"
                                            
                                        }
                                        // pattern:{
                                        //     value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@ [a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        //     message:"Invalid Email Format"
                                        // }
                                    }
                                )}
                                placeholder='Email' className='outline-none mt-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' 
                            />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._Password?.message}</p>
                            <input type="password" 
                                {...register('_Password',
                                    {
                                        required:{value:true,message:"Please Enter Password"}
                                    }
                                )} 
                                placeholder='Password' className='outline-none mt-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' 
                            />
                        </div>
                        <div className='relative'>
                            <p className='absolute text-red-500 text-xs font-normal text-left'>{errors._ConfirmPassword?.message}</p>
                            <input type="password" 
                                {...register('_ConfirmPassword',
                                {
                                    required:{
                                        value:true,
                                        message:"Please Confirm your Password"
                                    },
                                    validate:{
                                        cfirmPass:(fildvalue)=>{
                                        return ( fildvalue===watch("_Password") || "Password not matched")
                                        }
                                    }
                                }
                                )} 
                                placeholder='Confirm Password' className='outline-none mt-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' 
                            />
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
    // <>
    //  <form onSubmit={handleSubmit(Submit)}>
    //                     <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

    //                         <div className="sm:col-span-3">
    //                             <label className="inline-block text-sm text-gray-800 mt-2.5">
    //                                 Profile photo
    //                             </label>
    //                         </div>
    //                         <div className="sm:col-span-9">
    //                             <div className="flex items-center gap-5">
    //                                 <img
    //                                     className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
    //                                     src="https://preline.co/assets/img/160x160/img1.jpg"
    //                                     alt="Avatar"
    //                                 />
    //                                 <div className="flex gap-x-2">
    //                                     <div>
    //                                         <input
    //                                             type="file"
    //                                             className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
    //                                             accept=".jpeg, .png, .jpg, .gif, .svg"
    //                                             {...register("file")}
    //                                         />
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="sm:col-span-3 text-blue-600">
    //                             <label
    //                                 htmlFor="af-account-full-name"
    //                                 className="inline-block text-sm text-blue-6000 mt-2.5 dark:text-neutral-200"
    //                             >
    //                                 Full name
    //                             </label>
    //                         </div>
    //                         <div className="sm:col-span-9">
    //                             <div className="sm:flex">
    //                                 <input
    //                                     id="af-account-full-name"
    //                                     name='first_name'
    //                                     type="text"
    //                                     className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                     placeholder="First Name"
    //                                     required
    //                                     {...register('first_name')}
    //                                 />
    //                                 <input
    //                                     type="text"
    //                                     name='last_name'
    //                                     className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                     placeholder="last Name"
    //                                     required
    //                                     {...register('last_name')}
    //                                 />
    //                             </div>
    //                         </div>

    //                         <div className="sm:col-span-3">
    //                             <label
    //                                 htmlFor="af-account-email"
    //                                 className="inline-block text-sm text-blue-600 mt-2.5 dark:text-neutral-200"
    //                             >
    //                                 Email
    //                             </label>
    //                         </div>
    //                         <div className="sm:col-span-9">
    //                             <input
    //                                 id="af-account-email"
    //                                 name='email'
    //                                 type="email"
    //                                 className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                 placeholder="email@gmail.com"
    //                                 required
    //                                 {...register('email')}
    //                             />
    //                         </div>

    //                         <div className="sm:col-span-3">
    //                             <label
    //                                 htmlFor="af-account-password"
    //                                 className="inline-block text-sm text-blue-600 mt-2.5 dark:text-neutral-200"
    //                             >
    //                                 Password
    //                             </label>
    //                         </div>
    //                         <div className="sm:col-span-9">
    //                             <div className="space-y-2">
    //                                 <input
    //                                     id="af-account-password"
    //                                     name='password'
    //                                     type="password"
    //                                     className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                     placeholder="password"
    //                                     required
    //                                     {...register('password')}
    //                                 />
    //                             </div>
    //                         </div>

    //                         <div className="sm:col-span-3">
    //                             <label
    //                                 htmlFor="af-account-phone"
    //                                 className="inline-block text-sm text-blue-600 mt-2.5 dark:text-neutral-200"
    //                             >
    //                                 Phone
    //                             </label>

    //                         </div>
    //                         <div className="sm:col-span-9">
    //                             <div className="sm:flex">
    //                                 <input
    //                                     id="af-account-phone"
    //                                     name='phone'
    //                                     type="text"
    //                                     className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                     placeholder="+x(xxx)xxx-xx-xx"
    //                                     required
    //                                     {...register('phone')}
    //                                 />
    //                                 <select className="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    //                                     <option>Mobile</option>
    //                                     <option>Home</option>
    //                                     <option>Work</option>
    //                                     <option>Fax</option>
    //                                 </select>
    //                             </div>
    //                         </div>
    //                         <div className="sm:col-span-3">
    //                             <label
    //                                 htmlFor="af-account-company"
    //                                 className="inline-block text-sm text-blue-600 mt-2.5 dark:text-neutral-200"
    //                             >
    //                                 Type
    //                             </label>
    //                         </div>

    //                         <div className="sm:col-span-9">
    //                             <div className="flex items-center">
    //                                 <label className="inline-flex items-center mr-4">
    //                                     <input
    //                                         type="radio"
    //                                         name="type"
    //                                         value="company"
    //                                         className="form-radio text-blue-600 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600"
    //                                         checked={type === 'company'}
    //                                         onChange={handleRadioChange}
    //                                         // {...register('company')}
    //                                     />
    //                                     <span className="ml-2 text-sm text-gray-800 dark:text-neutral-400">Company</span>
    //                                 </label>

    //                                 <label className="inline-flex items-center">
    //                                     <input
    //                                         type="radio"
    //                                         name="type"
    //                                         value="franchise"
    //                                         className="form-radio text-blue-600 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600"
    //                                         checked={type === 'franchise'}
    //                                         onChange={handleRadioChange}
    //                                         // {...register('franchise')}
    //                                     />
    //                                     <span className="ml-2 text-sm text-gray-800 dark:text-neutral-400">Franchise</span>
    //                                 </label>
    //                             </div>
    //                         </div>

    //                         {((type !== "franchise") && (type !== "company")) && <div className="sm:col-span-3 text-blue-600">
    //                             <label
    //                                 htmlFor="af-account-full-name"
    //                                 className="inline-block text-sm text-blue-6000 mt-2.5 dark:text-neutral-200"
    //                             >
    //                                 Designation
    //                             </label>
    //                         </div>}
    //                         {
    //                             (type === "franchise" || type === "company")? 
    //                             <div className={"sm:col-span-3 text-blue-600 "}>
    //                                 <label
    //                                     htmlFor="af-account-full-name"
    //                                     className="inline-block text-sm text-blue-6000 mt-2.5 dark:text-neutral-200"
    //                                 >
    //                                     {type === "company" ? "Company" : "Franchise"}
    //                                 </label>
    //                             </div>:""
    //                         }
    //                         {type === 'company' && (
    //                             <div className="sm:col-span-9">
    //                                 <div className="sm:flex">
    //                                     <input
    //                                         type="text"
    //                                         id="company-name"
    //                                         name="companyName"
    //                                         className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                         placeholder='Company'
    //                                         {...register('company')}
    //                                     />
    //                                     <input
    //                                         type="text"
    //                                         id="ntn"
    //                                         name="ntn"
    //                                         className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                         placeholder='NTN'
    //                                         {...register('ntn')}
    //                                     />
    //                                 </div>
    //                             </div>
    //                         )}
    //                         {type === 'franchise' && (
    //                             <div className="sm:col-span-9">
    //                                 <div className="sm:flex">

    //                                     <input
    //                                         type="text"
    //                                         id="company-name"
    //                                         name="companyName"
    //                                         className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                         required
    //                                         placeholder='Franchise'
    //                                         {...register('company')}
    //                                     />
    //                                     <input
    //                                         type="text"
    //                                         id="ntn"
    //                                         name="ntn"
    //                                         className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                         placeholder='NTN'
    //                                         {...register('ntn')}
    //                                     />
    //                                 </div>
    //                             </div>
    //                         )}

    //                         {((type === "franchise") || (type === "company")) && <div className="sm:col-span-3 text-blue-600 ">
    //                             <label
    //                                 htmlFor="af-account-full-name"
    //                                 className="inline-block text-sm text-blue-6000 mt-2.5 dark:text-neutral-200"
    //                             >
    //                                 Designation
    //                             </label>
    //                         </div>}
    //                         <div className="sm:col-span-9">
    //                             <div className="sm:flex">
    //                                 <input
    //                                     id="af-account-full-name"
    //                                     name='first_name'
    //                                     type="text"
    //                                     className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                     placeholder="Designation"
    //                                     required
    //                                     {...register('bio')}
    //                                 />
    //                                 <input
    //                                     type="text"
    //                                     name='last_name'
    //                                     className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                                     placeholder="CNIC"
    //                                     required
    //                                     {...register('cnic')}
    //                                 />
    //                             </div>
    //                         </div>

    //                     </div>
    //                     <div className="mt-5 flex justify-end gap-x-2">
    //                         <button
    //                             type="submit"
    //                             className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
    //                         >
    //                             Register
    //                         </button>
    //                     </div>
    //                 </form>
    // </>   
    
   
  )
}

export default SignUp