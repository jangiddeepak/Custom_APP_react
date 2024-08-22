import { useEffect, useState } from "react"
import { apicaller } from "../api/api"

export const UseEffectApi=()=>{
    let[apidata,setdataApi]=useState([])
    useEffect(()=>{
        (async ()=>{
           
           setdataApi(await apicaller())
        })()
        
    },[])
    console.log(apidata)
    return <>
   { apidata.map((a:any)=>{
    return  <img src={a.image} />
   })}
    
    </>
}