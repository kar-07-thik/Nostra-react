import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
const Signup = () => {
    const Navigate = useNavigate()
    const [Suser, setSuser] = useState("")

    const [Semail, setSemail] = useState("")
    const [Spass, setSpass] = useState("")


    const [SEuser, setSEuser] = useState(true)
    const [SEemail, setSEemail] = useState(true)
    const [SEpass, setSEpass] = useState(true)
    const SUserHandler = (e) => {
        setSuser(e.target.value)
     
    }
    const SEmailHandler = (e) => {
        setSemail(e.target.value)
   
    }
    const SPassHandler = (e) => {
        setSpass(e.target.value)
  
    }

    const Signbtn = (e) => {
        e.preventDefault()
        let Isvalid = true;
        if (!Suserrx.test(Suser)) {
            setSEuser(false)
            Isvalid = false
        } else {
            setSEuser(true)
        }
        if (!Semailrx.test(Semail)) {
            setSEemail(false)
            Isvalid = false
        } else {
            setSEemail(true)
        }
        if (!Spassrx.test(Spass)) {
            setSEpass(false)
            Isvalid = false
        } else {
            setSEpass(true)
        }
        if (Isvalid) {
            axios.post("http://localhost:5000/Signup",{"Username":Suser,"Email":Semail,"Password":Spass})
            Navigate("/")
        }
    }
    // regex
    const Suserrx = /^[A-Za-z0-9.-_]+$/
    const Semailrx = /^[A-Za-z0-9._%\-]+@gmail\.com$/
    const Spassrx = /^[A-Za-z0-9@*$_!.\-]{6,}$/
    return (
        <div className="signUpbg">
            <div className="flex flex-col gap-5 px-3 py-10 w-full h-full md:w-[50%] bg-white " style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                <div>
                    <h1 className="text-2xl font-bold">Sign Up</h1>
                </div>
                <div>
                    <p>Join the World of Effortless Fashion</p>
                </div>
                <form className="flex flex-col gap-10  w-full  ">
                    <div>
                        <label style={{ color: SEuser ? "black" : "red" }}>Username</label><br />
                        <input style={{ borderColor: SEuser ? "black" : "red" }} onChange={SUserHandler} type="text" placeholder="Enter your password" className="border-b-2 focus:outline-hidden  w-full"></input>
                    </div>
                    <div>
                        <label style={{ color: SEemail ? "black" : "red" }}>Email</label><br />
                        <input style={{ borderColor: SEemail ? "black" : "red" }} onChange={SEmailHandler} type="text" placeholder="email@gmail.com" className="border-b-2 focus:outline-hidden w-full"></input>
                    </div>
                    <div>
                        <label style={{ color: SEpass ? "black" : "red" }}>Password</label><br />
                        <input style={{ borderColor: SEpass ? "black" : "red" }} onChange={SPassHandler} type="text" placeholder="Enter your password" className="border-b-2 focus:outline-hidden w-full"></input>
                    </div>
                    <div>
                        <button onClick={Signbtn} className="text-white bg-black w-full cursor-pointer py-2 ">Sign Up</button>

                    </div>
                    <div className="flex text-sm gap-1">
                        <h1>I have already account?</h1><Link to={"/"}><span className="font-bold cursor-pointer">Login</span></Link>
                    </div>
                </form>

            </div>

        </div>


    )
}
export default Signup