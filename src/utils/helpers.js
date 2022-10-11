const deck=["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"]
//{num:2, suite:"hearts", picUrl:"", }

export function shuffleCards(){
   return deck.sort(() => (Math.random() > .5) ? 1 : -1)
}



// export function dealCards(){

// }
