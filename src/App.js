import {useState} from "react"
import './App.css';
import { useBlackJackContext } from "./utils/blackjackContext"
import StatefulComp from './components/statefulcomp';
import HomePage from './pages/home';
import BlackJackPage from "./pages/blackjack";
import { BlackJackProvider } from "./utils/blackjackContext"




function App() {
  const {currentUser,setCurrentUser } = useBlackJackContext()
  const [username, setUserName]=useState("")
  const [userScore, setUserScore]=useState("")
  const [scoreboard, setWins]=useState({wins:0, losses:0})
  //const [running]
  return (
    <div className="App">
      {currentUser ?
        <BlackJackPage username={currentUser}/> :
        <HomePage setCurrentUser={setCurrentUser}/>
        }
    </div>
  );
}

export default App;
