import React, {createContext, useContext, useState} from "react"

const BlackJackContext = createContext()

export const useBlackJackContext = () => useContext(BlackJackContext)

export const BlackJackProvider = ({children}) =>{
    const [currentUser, setCurrentUser]= useState("")

    function checkIfThereIsWinner(userName){
        return userName
    }

    return(
        <BlackJackContext.Provider value={{ currentUser, setCurrentUser, checkIfThereIsWinner}}>
            {children}
        </BlackJackContext.Provider>
    )
}