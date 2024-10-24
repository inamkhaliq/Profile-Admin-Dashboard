import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

const Bill = () => {

    let [billData,setBilldata]=useState();
    useEffect(()=>{
        fetchData();        
    },[])
        let fetchData=async()=>{
            let response=await axios.get("https://bill.pitc.com.pk/fescobill/general?refno=13132120685600");
            // console.log()
            // let strngdata= await JSON.stringify(response.data);
            await setBilldata(response.data);
        }
        
    console.log(billData)
  return (
    <>
        {
            !billData?
            <div>Loading</div>:
            <div dangerouslySetInnerHTML={{__html:billData}}>

            </div>

        }
    
    </>
    
       
  )
}

export default Bill





// is form ko to dekh main iski value useForm se object main save krwana chah raha hon liken jab main type ki value register main leta hon to type par radio button par click krne par iske nechy wale field show ni hoty