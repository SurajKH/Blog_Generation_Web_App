//let us create a custom hook
import { useState,useEffect } from "react";

const useFetch = (url) =>
{
    const abortCont=new AbortController();


    const [data,setData]=useState(null);
    const [isPending,setIspending]=useState(true);



    useEffect(() =>
    {
      //since we have considered the function within the setTimeout() we basically consider the fact of a given timeout as well.
      
    setTimeout(()=>
    {
      fetch(url,{signal:abortCont.signal})
      .then(res => {
       return res.json()
      })
      .then(data=>
      {
         console.log(data);
         setData(data);
         setIspending(false);
         
      });
      

   },1000);

   
},[url]);

   return {data,isPending};

}

export default useFetch;