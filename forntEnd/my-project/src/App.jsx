import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Collection from "./Pages/Collection"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Contextprovider from "./Contextprovider"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Contextprovider>

          <Routes>
            <Route path="/" element={<Login/>}></Route>
             <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/collection" element={<Collection />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

        </Contextprovider>
      </BrowserRouter>



    </>

  )
}
export default App