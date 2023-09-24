import { useState,useEffect } from "react";
const useFetch=(url)=>
{
    const [data,setData]=useState(null);
    const [ispending,setIspending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{ 
        setTimeout(()=>{
    
        fetch(url)
        .then(res=>{
            if(!res.ok)
            {
                throw Error('could not fetch the data for that resource')
            }
    
            
            return res.json();
        })
        .then(data =>{
            setIspending(false)
            setData(data)
            setError(null)
        })
        .catch(err=>{
            setIspending(false)
            setError(err.message)   
            
        })
    },1000)
    },[url])
    return{
        data,ispending,error
    }
}
export default useFetch;