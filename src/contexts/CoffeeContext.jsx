import { createContext } from "react";
import { useState } from "react";


export const CoffeeContext = createContext({})


export const CoffeeProvider = ({ children}) => {
    const [open, setOpen] = useState(false)
    return(
        <CoffeeContext.Provider value={{ open, setOpen}} > {children}</CoffeeContext.Provider>

    )
} 