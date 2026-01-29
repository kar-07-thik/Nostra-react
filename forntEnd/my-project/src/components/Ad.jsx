import { useState } from "react"

const Ad = ()=>{
    const [adclose,setadclose]=useState(false)
    const adCloser=()=>{
        setadclose(true)
    }
    return(
        <>
          <div classNameName="ad" style={{display: adclose? "none":"block"}}>
                <p className="bg-black text-center text-white p-2">sign up and <span className="text-white font-bold">GET 20% OFF</span>
                    your frist order <span className="text-white ml-5 cursor-pointer " onClick={adCloser}>X</span></p>

            </div>
        </>
    )
}
export default Ad