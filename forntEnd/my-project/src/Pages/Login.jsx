import { useState } from "react"
import Loginimg from "../assets/loginImg.jpg"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
const Login = () => {
    const Navigate = useNavigate()
    const [Lemail, setLemail] = useState("")
    const [Lpass, setLpass] = useState("")

    const [LEemail, setLEemail] = useState(true)
    const [LEpass, setLEpass] = useState(true)

    const [loginE,setLoginE]=useState(true)
    const LEmailHandler = (e) => {
        setLemail(e.target.value)

    }
    const LPassHandler = (e) => {
        setLpass(e.target.value)

    }
    const Loginbtn = (e) => {
        e.preventDefault()
        let Isvalid = true;
        if (!Lemailrx.test(Lemail)) {
            setLEemail(false)
            Isvalid = false
        } else {
            setLEemail(true)
        }
        if (!Lpassrx.test(Lpass)) {
            setLEpass(false)
            Isvalid = false
        } else {
            setLEpass(true)
        }
        if (Isvalid) {
            axios.post("http://localhost:5000/Login", { "Loginemail": Lemail, "Loginpass": Lpass }).then(function (Smsg) {
                console.log(Smsg)
                if (Smsg.data == true) {
                    Navigate("/Home")
                }
                else {
                     setLoginE(false)
                    console.log("failed")
                }
            })

        }

    }

    // regex
    const Lemailrx = /^[A-Za-z0-9._%\-]+@gmail\.com$/
    const Lpassrx = /^[A-Za-z0-9@$*_!.\-]{6,}$/

    return (
        <section className="flex justify-center items-center h-[100vh] ">


            <div className="md:flex justify-between w-[95%] h-[85%]  rounded-2xl h-[90%]" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>


                <div className="flex flex-col gap-10 items-center my-10 overflow-y-clip md:w-[50%]">
                    <div >
                        <h1 className="text-white text-2xl w-fit rounded-md p-1 bg-black md:hidden">
                            Nostra
                        </h1>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Log in</p>
                    </div>

                    <form className="flex flex-col gap-10  w-full px-3 ">

                        <div>
                            <div style={{display:loginE?"none":"block"}}>
                                <lable className="font-bold text-red-500">Register now!</lable><br />
                            </div>

                            <label style={{ color: LEemail ? "black" : "red" }}>Email</label><br />
                            <input style={{ borderColor: LEemail ? "black" : "red" }} value={Lemail} onChange={LEmailHandler} type="text" placeholder="email@gmail.com" className="border-b-2 focus:outline-hidden  w-full"></input>
                        </div>
                        <div>
                            <label style={{ color: LEpass ? "black" : "red" }}>Password</label><br />
                            <input style={{ borderColor: LEpass ? "black" : "red" }} value={Lpass} onChange={LPassHandler} type="text" placeholder="Enter your password" className="border-b-2 focus:outline-hidden w-full"></input>
                        </div>
                        <div>
                            <button onClick={Loginbtn} className="text-white bg-black w-full cursor-pointer py-2 ">Login</button>
                            <p className="mt-3 text-sm underline cursor-pointer">Forgot password?</p>
                        </div>
                        <div className="flex text-sm gap-1">
                            <h1>Don't have an accout?</h1><Link to={"/Signup"}><span className="font-bold cursor-pointer">Resgister Now</span></Link>
                        </div>
                    </form>


                </div>
                <div className="hidden md:flex w-[50%] ">
                    <img className="w-100% rounded-r-2xl" src={Loginimg}></img>
                </div>
            </div>
        </section>
    )
}
export default Login