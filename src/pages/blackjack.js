import { useState, useEffect } from "react"
import { shuffleCards, dealCards } from "../utils/helpers"
import {useBlackJackContext} from "../utils/blackjackContext"
// import { Link } from "react-router-dom"

function BlackJackPage({ username }) {
    const {currentUser} = useBlackJackContext()
    const [userData, setUserData] = useState({})
    const [draws, setDraws] = useState(0)
    const [userCards, setUserCards] = useState([])
    const [computerCards, setComputerCards] = useState([])
    const [currentDeck, setCurrentDeck] = useState([])
    const [activeGame, setActiveGame] = useState(true)
    const [whoIsDrawing, setWhoIsDrawing] = useState("user")
    const [currentCard, setCurrentCard] = useState(3)

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
            

        }else{

        }
    }

    return (
        <div>
            blackjack page here
            <br></br>
            {computerCards}
            {userCards}

            <button onClick={hitMe}>Hit Me</button>
            
            
            <div>
            Good luck {currentUser}!
            </div>
        </div>
    )
}

export default BlackJackPage;