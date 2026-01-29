import { Link } from "react-router-dom"


import silderImg from "../assets/slider-one.jpg"

import adidasIcon from "../assets/adidas-icon.png"
import leavesIcon from "../assets/leaves-icon.png"
import pumaIcon from "../assets/puma-icon.png"
import simpleIcon from "../assets/simple-icon.png"
import twitchIcon from "../assets/twitch-icon.png"

import most1 from "../assets/most-img1.jpg"
import most2 from "../assets/most-img2.jpg"
import most3 from "../assets/most-img3.jpg"
import most4 from "../assets/most-img4.jpg"
import most5 from "../assets/most-img5.jpg"
import most6 from "../assets/most-img6.jpg"
import most7 from "../assets/most-img7.jpg"
import most8 from "../assets/most-img8.jpg"

import newarrivals1 from "../assets/newarrivals-1.avif"
import newarrivals2 from "../assets/newarrivals-2.jpg"
import newarrivals3 from "../assets/newarrivals-3.avif"
import newarrivals4 from "../assets/newarrivals-4.webp"

import limitedImg from "../assets/limited-offer-img.jpg"


import Ad from "../components/Ad"
import Nav from "../components/Nav"
import Join from "../components/Join"
import Footer from "../components/Footer"



const Home = () => {
    
    return (
        <>
            
            <Ad />
            <Nav />
            <section>

                <div className="slider">
                    <div className="slider-image-container">
                        <img src={silderImg} width="100%" className="slider-image" />
                        <img src={silderImg} width="100%" className="slider-image" />
                        <img src={silderImg} width="100%" className="slider-image" />
                    </div>

                    <div className="slider__desc">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white"
                            className="h-10 md:h-20" id="slider-left-activate">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <div className="text-center">
                            <h1 className="font-bold  text-white">Level up your style with our</h1>
                            <h2 className="text-white">Summer Collection</h2>
                            <Link to="/collection"><button  className=" bg-gray-300 rounded-md p-2 md:text-2xl">Shop Now</button></Link>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white"
                            className="h-10 md:h-20" id="slider-right-activate">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>

                </div>
                <section className="brands">
                    <h1 className="text-2xl font-bold mt-4">Brands</h1>
                    <div className="brand__container">
                        <div>
                            <img src={pumaIcon} width="30%" />
                            <p>Puma</p>
                        </div>
                        <div>
                            <img src={adidasIcon} width="30%" />
                            <p>Adidas</p>
                        </div>
                        <div>
                            <img src={leavesIcon} width="30%" />
                            <p>Leaves</p>
                        </div>
                        <div>
                            <img src={simpleIcon} width="30%" />
                            <p>Simple</p>
                        </div>
                        <div>
                            <img src={pumaIcon} width="30%" />
                            <p>Behance</p>
                        </div>
                        <div>
                            <img src={twitchIcon} width="30%" />
                            <p>Twitch</p>
                        </div>
                        <div>
                            <img src={leavesIcon} width="30%" />
                            <p>Leaves</p>
                        </div>
                    </div>
                </section>
                <section className="mt-4">
                    <div className="best__title">
                        <div>
                            <h2 className="font-bold">We Provide Best</h2>
                            <h2 className="font-bold">Customer experience</h2>
                        </div>
                        <div>
                            <p>||we ensure that our customer have the best shopping experience</p>
                        </div>

                    </div>

                    <div className="best__container">
                        <div className="best__container__card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="h-6 md:h-10">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className="font-bold">Original Product</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.hdyff bdgbb
                                bebbdch bueubceueuuhbbceb ubeugbueub </p>

                        </div>
                        <div className="best__container__card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="h-6 md:h-10">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>

                            <p className="font-bold">Original Product</p>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis?Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.</p>

                        </div>
                        <div className="best__container__card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="h-6 md:h-10">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                            </svg>

                            <p className="font-bold">Original Product</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit.</p>

                        </div>
                        <div className="best__container__card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="h-6 md:h-10">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <p className="font-bold">Original Product</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                                magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, a.</p>
                        </div>
                    </div>
                </section>
                <section id="newarrivals">
                    <div className="newarrivals">
                        <h1 className="text-2xl font-bold mt-4 md:text-3xl">New Arrivals</h1>
                        <div className="newarrivals__container">
                            <div className="newarrivals__card">
                                <img src={newarrivals1} />
                                <div className="opacity"></div>
                                <button className="newarrivals__btn">Shop Now →</button>
                            </div>
                            <div className="newarrivals__card">
                                <img src={newarrivals2} />
                                <div className="opacity"></div>
                                <button className="newarrivals__btn">Shop Now →</button>
                            </div>
                            <div className="newarrivals__card">
                                <img src={newarrivals3} />
                                <div className="opacity"></div>
                                <button className="newarrivals__btn">Shop
                                    Now →</button>
                            </div>
                            <div className="newarrivals__card">
                                <img src={newarrivals1} />
                                <div className="opacity"></div>
                                <button className="newarrivals__btn">Shop
                                    Now →</button>
                            </div>
                        </div>
                    </div>


                </section>
                <section id="mostwanted">
                    <h1 class="text-2xl font-bold md:text-3xl">Most wanted</h1>
                    <div class="mostwanted__container">


                        <div class="most__container__card">
                            <img src={most1} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                        </div>
                        <div class="most__container__card">
                            <img src={most2} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <div class="most__container__card">
                            <img src={most3} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <div class="most__container__card">
                            <img src={most4} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <div class="most__container__card">
                            <img src={most5} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <div class="most__container__card">
                            <img src={most6} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <div class="most__container__card">
                            <img src={most7} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <div class="most__container__card">
                            <img src={most8} alt="" />
                            <button class="sale">sale</button>
                            <svg class="like" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                    </div>



                </section>
                <section>
                    <div class="limited__offer">
                        <img src={limitedImg} />
                        <div class="limited__offer__desc ">
                            <h1 class="font-bold">Limited Offer 35% OFF on this for the first 30</h1>

                            <h3>Customers</h3>
                            <button class="mt-2 bg-white text-black p-1 rounded">shop Now →</button>
                        </div>

                    </div>
                </section>
                <Join />
                <Footer />
            </section >
        </>
    )
}
export default Home