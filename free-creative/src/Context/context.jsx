import { createContext, useEffect, useState } from 'react'


export const AppContext = createContext(null)

export default function ContextProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const inputValueNameSave = localStorage.getItem('nameSave')
    const inputValuePhoneSave = localStorage.getItem('phoneSave')

    const [inputValueName , setInputValueName] = useState(inputValueNameSave?inputValueNameSave:'')
    const [inputValuePhone , setInputValuePhone] = useState(inputValuePhoneSave?inputValuePhoneSave:'')
    
    console.log(inputValueName)

    useEffect(()=>{
        localStorage.setItem('nameSave', String(inputValueName))
    }, [inputValueName])

    useEffect(()=>{
        localStorage.setItem('phoneSave', String(inputValuePhone))
    }, [inputValuePhone])

    const openPortal = () => {
        setIsOpen(true)
    }

    const closePortal = () => {
        setIsOpen(false)
        setInputValueName('')
        setInputValuePhone('')
    }

    const value = {
        isOpen,
        openPortal,
        closePortal,
        inputValueName,
        inputValuePhone,
        setInputValueName,
        setInputValuePhone,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}