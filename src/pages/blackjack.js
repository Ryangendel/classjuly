import { useState, useEffect } from "react"
import { shuffleCards, dealCards } from "../utils/helpers"

function BlackJackPage({ username }) {
    const [userData, setUserData] = useState({})
    const [draws, setDraws] = useState(0)
    const [userCards, setUserCards] = useState([])
    const [computerCards, setComputerCards] = useState([])
    const [currentDeck, setCurrentDeck] = useState([])
    const [activeGame, setActiveGame] = useState(true)
    const [whoIsDrawing, setWhoIsDrawing] = useState("user")

    useEffect(() => {
        const shuffledCards = shuffleCards()
        let [c1, c2, c3, c4] = shuffledCards
        setComputerCards([c2, c4])
        setUserCards([c1, c3])
        setCurrentDeck(shuffledCards)
        // console.log(c1, c3)
        // console.log(c2, c4)

        // dealCardsClient()
        // computersCards()
    }, [])

    function hitMe(){
        if(whoIsDrawing=="user"){
            console.log("inside user")

        }
    }

    return (
        <div>
            blackjack page here
            <br></br>
            {computerCards}
            {userCards}

            <button onClick={hitMe}>Hit Me</button>
        </div>
    )
}

export default BlackJackPage;