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

// // ----------------------------------------------------- //

$(() => {
  const cardArray = [
    {
      name: "Cookie Monster",
      img: "images/cookie_monster_200.jpg",
    },
    {
      name: "Cookie Monster",
      img: "images/cookie_monster_200.jpg",
    },
    {
      name: "Elmo",
      img: "images/elmo_200.jpg",
    },
    {
      name: "Elmo",
      img: "images/elmo_200.jpg",
    },
    // {
    //   name: "Bert",
    //   img: "images/bert_200.jpg",
    // },
    // {
    //   name: "Bert",
    //   img: "images/bert_200.jpg",
    // },
    // {
    //   name: "Ernie",
    //   img: "images/ernie_200.jpg",
    // },
    // {
    //   name: "Ernie",
    //   img: "images/ernie_200.jpg",
    // },
    // {
    //   name: "Count",
    //   img: "images/count_200.jpg",
    // },
    // {
    //   name: "Count",
    //   img: "images/count_200.jpg",
    // },
    // {
    //   name: "Grover",
    //   img: "images/grover_200.jpg",
    // },
    // {
    //   name: "Grover",
    //   img: "images/grover_200.jpg",
    // }
  ];

//   Shuffle Cards with Fisher-Yates method
//  for (i = cardArray.length - 1; i > 0; i--) {
//    j = Math.floor(Math.random() * i);
//    k = cardArray[i];
//    cardArray[i] = cardArray[j];
//    cardArray[j] = k;
//  } 

  const $board = $(".cards-wrapper");

  //Empty arrays to store cards chosen and Ids of cards
  let cardsChosen = [];
  let cardsChosenId = [];
  const matchedCards = [];

  //Sets scores for players

//   let $player1Score = $(".scoreP1");
//   $($player1Score).text(player1.score);

//   let $player2Score = $(".scoreP2");
//   $($player2Score).text(player2.score);

  //Countdown clock

    let time = 10;
    let $startTime = $(".time");
    $startTime.text(time);

    const timer = () => {
      time--;
      $startTime.text(`${time}`);
    };
    let interval = setInterval(() => {
      timer();
      if (time <= 0) {
        clearInterval(interval);
        //GAME OVER FUNCTION
        alert("Game over!");
      }
    }, 1000); 

class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    checkForMatch() {
        return true;
    }
    updateScore() {
        return true;
    }
}
const player1 = new Player('1', 0);
const player2 = new Player('2', 0);



const state = {
    p1: player1,
    p2: player2
}

let currentPlayer = 'p1';

console.log(state[currentPlayer]);

// currentPlayer ='p2';

let $player1Score = $(".scoreP1");
let $updatedP1Score = player1.score;
$($player1Score).text(`${$updatedP1Score}`);

let $player2Score = $(".scoreP2");
let $updatedP2Score = player2.score;
$($player2Score).text(`${$updatedP1Score}`);

  //Loop over each card in the array, create img element for each card, add logo to each card, add event listener to each card, append to cards-wrapper
  const buildBoard = () => {
    for (i = 0; i < cardArray.length; i++) {
      let $card = $("<img>");
      $card.attr("src", "images/logo_200.jpg");
      $card.addClass("cards");
      $card.attr("data-id", i);
      $card.attr("data-img", cardArray[i].img);
      $card.on("click", flipCard);
      $board.append($card);
    }
  };

  const updateScore = () => {

      if (currentPlayer === "p1") {
        $updatedP1Score += 10;
        return($updatedP1Score);
      } else if (currentPlayer === "p2") {
        $updatedP2Score += 10;
        return $updatedP2Score;
      }
  }

  //check if cards match
  const checkForMatch = () => {
    const $cards = $("img");

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Match!");
      $cards.eq(cardsChosenId[0]).attr("src", "images/letter_x_200.jpg");
      $cards.eq(cardsChosenId[1]).attr("src", "images/letter_x_200.jpg");
      //Push matched cards to array, so can't be chosen again
      matchedCards.push(cardsChosen);

      updateScore();

      //This is a problem! :)
    //   score += 10;
    //   $($player1Score).text(score);
    } else {
      //flip them back over and display Sesame St logo card
      alert("Not a match! Try again");
      $cards.eq(cardsChosenId[0]).attr("src", "images/logo_200.jpg");
      $cards.eq(cardsChosenId[1]).attr("src", "images/logo_200.jpg");
    }

    //Clear out arrays so you can make another selection
    cardsChosen = [];
    cardsChosenId = [];

    if (matchedCards.length === cardArray.length / 2 && time !== 0) {
      alert("You found them all!");
      clearInterval(interval);
    //   userWins();
    //   changePlayer();
    }
    else {
    //   alert("You lose!");
    }
  };

  //

  const flipCard = (event) => {
    const $dataId = $(event.currentTarget).data("id");

    cardsChosen.push(cardArray[$dataId].name);

    cardsChosenId.push($dataId);

    $("img").eq($dataId).attr("src", cardArray[$dataId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };

//   const gameRound = () => {
//       while ($updatedP1Score > 0 || $updatedP2Score > 0 && time > 0) {
//       if ($updatedP1Score === 10) {
//           alert("Boom");
//           break
//       }
//       else {
//           alert("Boom2")
//           break
//       }
//   }
// }
// gameRound(turn);

  buildBoard();

});




// // First version ----------------------------------------------------- //

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
    

