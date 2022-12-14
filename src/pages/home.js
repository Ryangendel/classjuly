import { useState, useEffect } from "react"
import Header from "../components/Header"
import {useBlackJackContext} from "../utils/blackjackContext"
import {Link} from "react-router-dom"

function HomePage({setUserName}) {
    const {setCurrentUser, currentUser, checkIfThereIsWinner} = useBlackJackContext()

    const [user, setUser] = useState("")
    const [user1Cards, setUser1Cards] = useState("")
    const [usersTemp, setUsersTemp] = useState()
    // const [count, setCount] = useState(0)

    useEffect(() => {
        getWeather()
    },[])

    function updateUser(e){
        e.preventDefault()
        console.log("----------")
        console.log(e.target.name.value)
        //user
        setCurrentUser(e.target.name.value)
        
        //setUser(e.target.name.value)
    }


    function getWeather(){
        const city= "denver"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6cba9d01ef70f28fac514fe4db61ef58`)
        .then(data=>data.json())
        .then(cleanedData=>{
            const usersTemperature= cleanedData.main.temp
            setUsersTemp(Math.floor(usersTemperature))
        })

    }

    return (
        <div>
            <Header usersTemp={usersTemp}/>
            <form onSubmit={updateUser}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {user}
            </div>
            <div>
                {currentUser?<Link to="/blackjackgame">PLAY GAME</Link>:""}
            </div>
        </div>

    )
}

export default HomePage