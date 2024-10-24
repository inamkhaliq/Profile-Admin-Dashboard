import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const ApiCall = () => {
    let fetchProdducts=async()=>{
        try{
            let result = await axios.get('https://dummyjson.com/products');
            console.log(result.data.products)            

        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchProdducts();
    },[])
    const RTKusers=useSelector( state=> state.UsersSlice);
    console.log(RTKusers.users)
  return (
    <div>ApiCall</div>
  )
}

export default ApiCall