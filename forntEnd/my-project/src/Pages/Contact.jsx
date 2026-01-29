import Ad from "../components/Ad"
import Footer from "../components/Footer"
import Join from "../components/Join"
import Nav from "../components/Nav"

const Contact = () => {
    return (
        <>
            <Ad />
            <Nav />
            <section id="contact">
                <div className="contact">
                    <div className="contact__desc">
                        <h1 className="text-3xl font-bold md:text-6xl">Contact Us</h1>
                        <p className="text-2xl mt-6">Name :</p>
                        <input className="border-3 border-white" type="text" />
                        <p className="text-2xl mt-6">Email</p>
                        <input className="border-3 border-white" type="text" />
                        <p className="text-2xl mt-4">Message</p>
                        <input type="text" className="border-3 border-white " />
                        <button className="contact__btn">Submit</button>
                    </div>


                </div>
            </section>
            <Join />
            <Footer />
        </>
    )
}
export default Contact