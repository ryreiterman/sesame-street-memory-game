// //Get 10 points for each matched card ... Player with most point after 3 rounds is the winner

// //Round 1 is 1 minute; Round 2 is 45 seconds; Round 3 is 30 seconds

// //Game starts with Round 1
// //Shuffle character cards randomly
// //Clock starts at 1 minute
// //Round begins with all the of cards facing down (Sesame St logo default)

// //Player 1 clicks 1 card, flips over to reveal character
// //Player 1 clicks second card, flips over to reveal character

// //If match, 10 points added to score, 2 cards removed from board
// //If no match, 2 cards flip back over
// //Keep playing until all cards matched, or if time runs out

// //When all cards matched, round is over, moves on to next player
// //If it's Player 2, round is over, message displays totals, asks to start next round

// //Repeat until Round 3, at end of round 3, message displays with the winner

// // --------------------------- //




// //Game Class
// class MatchGame {
//     constructor(time, cards) {
//         this.cardsArray = cards;
//         this.time = time;
//         this.timeLeft = time;
//         this.timer = document.getElementsByClassName("time");
//         this.scoreP1 = document.getElementsByClassName("scoreP1");
//         this.scoreP2 = document.getElementsByClassName("scoreP2");

//     }
//     //Properties that are set for each game/round
//     startGame() {
//         this.checkCards = null;
//         //Will have to add score from each round, but for now will start at 0
//         this.scoreP1 = 0;
//         this.scoreP2 = 0;
//         //Time resets 
//         this.timeLeft = time;
//         //When cards are matched, push to this empty array, then check total cards array to see if you win
//         this.matchedCards = [];
//         this.shuffleCards();
//     }

//     flipCard(card) {
//         card.classList.add("visible");

//     }
//     // canFlipCard(card) {

//     // }

//     shuffleCards() {
//         //Fisher-Yates method of shuffling cards backwards
//         for(let i = this.cardsArray.length - 1; i > 0; i--) {
//             let randomIndex = Math.floor(Math.random() * (i + 1));
//             this.cardsArray[randomIndex].style.order = i;
//             this.cardsArray[i].style.order = randomIndex;
//         }
//     }
    

// }
// //End of MatchgGame Class


// //Creates array from HTML elements
// let cards = Array.from(document.getElementsByClassName('cards'));

// //Loop over each card in the array and add event listener to flip cards
// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         game.flipCard(card);
//     })
// })

// let game = new MatchGame(100, cards);
    

