import React, {createContext, useContext, useState} from "react"

const BlackJackContext = createContext()

export const useBlackJackContext = () => useContext(BlackJackContext)

export const BlackJackProvider = ({children}) =>{
    const [currentUser, setCurrentUser]= useState("")

    function checkIfThereIsWinner(){

    }

    return(
        <BlackJackContext.Provider value={{ currentUser, setCurrentUser}}>
            {children}
        </BlackJackContext.Provider>
    )

}