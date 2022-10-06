import {useState} from "react"
import './App.css';
import StatefulComp from './components/statefulcomp';
import HomePage from './pages/home';
import BlackJackPage from "./pages/blackjack";

function App() {
  const [username, setUserName]=useState("")
console.log(username)
  return (
    <div className="App">
      {username ?
      <BlackJackPage username={username}/> :
      <HomePage setUserName={setUserName}/>
       }
    </div>
  );
}

export default App;
