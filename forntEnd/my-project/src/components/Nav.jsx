import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Contextprovider.jsx"
const Nav = () => {
    const { navSlider, setnavSilder,
       
     } = useContext(Context)
   

    const navIcon = () => {
        setnavSilder(false)
       
    }
      const navClose = () => {
        setnavSilder(true)
        
    }
    return (
        <>
            <nav className="navbar">
                <h1 className="text-2xl font-bold md:text-4xl">NOSTRA</h1>

                <div className="navbar__desk">
                    <Link to="/Home">Home</Link>
                    <a href="#newarrivals">New Arrival</a>
                    <a href="#mostwanted">Most Wanted</a>
                    <Link to="/collection">Collection</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="navbar__menuicon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                        stroke="currentColor" className="w-5 h-10" onClick={navIcon}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>

            <div style={{ left: navSlider ? "-300px" : "0px" }} className="navbar__slide">
                <h1 className="navbar__slide__close" onClick={navClose}>X</h1>
                <Link to="/Home"><p>Home</p></Link>
                <a href="#newarrivals"><p>newarrivals</p></a>
                <a href="#mostwanted"><p>Most wanted</p></a>
                <Link to="/collection"><p>Collection</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
            </div>
        </>
    )
}
export default Nav