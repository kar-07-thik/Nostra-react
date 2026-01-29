import { createContext, useState } from "react"

export const Context = createContext()
const Contextprovider = (data) => {
    const [navSlider, setnavSilder] = useState(true)
    const { navSliderClose, setnavSilderClose } = useState(true)

    return (
        <>
            <Context.Provider value={{
                navSlider, setnavSilder,
                navSliderClose, setnavSilderClose
            }}>
                {data.children}
            </Context.Provider>
        </>
    )
}
export default Contextprovider