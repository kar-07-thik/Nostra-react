import { useState } from "react"
import most1 from "../assets/most-img1.jpg"
import most2 from "../assets/most-img2.jpg"
import most3 from "../assets/most-img3.jpg"
import most4 from "../assets/most-img4.jpg"
import most5 from "../assets/most-img5.jpg"
import most6 from "../assets/most-img6.jpg"
import most7 from "../assets/most-img7.jpg"
import most8 from "../assets/most-img8.jpg"
import Ad from "../components/Ad"
import Footer from "../components/Footer"
import Join from "../components/Join"
import Nav from "../components/Nav"

const Collection = () => {
    const [search, setSearch] = useState("")
    const searchbox = (e) => {
        setSearch(e.target.value)
    }

    const CollectionArr = [{
        id: 1,
        title: "Party shirt",
        price: "20$",
        Img: most1
    },
    {
        id: 2,
        title: "Beach shirt",
        price: "10$",
        Img: most2
    },
    {
        id: 3,
        title: "Skyblue shirt",
        price: "15$",
        Img: most3
    },
    {
        id: 4,
        title: "Brown Jackect",
        price: "30$",
        Img: most4
    },
    {
        id: 5,
        title: "White shirt",
        price: "15$",
        Img: most5
    },
    {
        id: 6,
        title: "Baggy geuns",
        price: "30$",
        Img: most6
    },
    {
        id: 7,
        title: "Printed shirt",
        price: "20$",
        Img: most7
    },
    {
        id: 8,
        title: "shirt",
        price: "20$",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xVkufleVr5kTreepHcs4TtSY03P7az3qUw&s"
    },
    {
        id: 8,
        title: "Casual solid",
        price: "30$",
        Img: "https://i5.walmartimages.com/seo/ZZHZGZ-Fourth-of-July-Mens-Beach-Clothes-Men-s-Casual-Solid-and-Shirt-Long-Sleeve-Pocket-Less-Lapel-Top-Late-July-Beach-Clothes-for-Men-M_10384ffc-cb84-4930-bd15-5f0858ef894d.a1f02e1f5d22674efeba3ff08b93e98b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    }
    ]
    const SearchFilter = CollectionArr.filter(function (item) {
   return item.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <>
            <Ad />
            <Nav />
            <section className="body__margin">
                <section id="collection">
                    <div className="collection__s1">
                        <div className="collection__container">
                            <h1 className="font-bold text-2xl md:text-4xl">Occasion</h1>
                            <div className="collection__container__desc">
                                <lable><input type="checkbox"  /> Summer</lable>
                                <lable><input type="checkbox" name="check" /> Party</lable>
                                <lable><input type="checkbox" name="check" /> Beach</lable>

                            </div>

                        </div>
                        <div className="collection__container">
                            <h1 className="font-bold text-2xl md:text-4xl">Color</h1>
                            <div className="collection__container__desc">
                                <lable><input type="checkbox" /> Red</lable>
                                <lable><input type="checkbox" /> Green</lable>
                                <lable><input type="checkbox" /> white</lable>
                                <lable><input type="checkbox" /> Blue</lable>

                            </div>


                        </div>
                        <div className="collection__container">
                            <h1 className="font-bold text-2xl md:text-4xl">Arrivals</h1>
                            <div className="collection__container__desc">
                                <lable><input type="checkbox" /> New</lable>
                                <lable><input type="checkbox" /> Old</lable>
                            </div>
                        </div>

                    </div>

                    <div className="collection__s2">
                        <div className="collection__searchbox">

                            <input value={search} onChange={searchbox} type="text" placeholder="search" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" className="h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>

                        <div className="product__container" >
                            {
                                SearchFilter.map(function (item) {
                                    return (<div className="product__card">

                                        <img src={item.Img} alt="" />
                                        <h1>{item.title}</h1>
                                        <p>{item.price}</p>


                                    </div>)

                                })

                            }
                        </div>
                    </div>
                </section>

            </section>
            <Join />
            <Footer />
        </>
    )
}
export default Collection