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

  //Shuffle Cards with Fisher-Yates method
//  for (i = cardArray.length - 1; i > 0; i--) {
//    j = Math.floor(Math.random() * i);
//    k = cardArray[i];
//    cardArray[i] = cardArray[j];
//    cardArray[j] = k;
//  } 

  const $board = $(".cards-wrapper");

  //Empty arrays to store cards and Ids of cards
  let $cardsChosen = [];
  let $cardsChosenId = [];
  const $matchedCards = [];

  //Sets scores for players
  let score = 0;

  let $player1Score = $(".scoreP1");
  $($player1Score).text(score);

  let $player2Score = $(".scoreP2");
  $($player2Score).text(score);

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
        // alert("Game over!");

      }
    }, 1000); 

  //Displays gif when there is a winner
//   const userWins = () => {
//     const message = document.createElement("h1");
//     message.innerHTML = `You win!`;
//     document.body.appendChild(message);

//     const giphy = document.createElement("iframe");
//     giphy.src =
//       "https://giphy.com/gifs/dancing-sesame-street-elmo-x35xLpMQVVtUQ";
//     document.querySelector("#winning-message").appendChild(giphy);
//   };

class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
const player1 = new Player('1', 0);
const player2 = new Player('2', 0);



const state = {
    p1: player1,
    p2: player2
}
let turn = 'p1';

state[turn];

// turn ='p2';

console.log(turn.score);



console.log(turn);
console.log(state);

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

  //check if cards match
  const checkForMatch = () => {
    const $cards = $("img");
    const $cardOneId = $($cardsChosenId[0]);
    const $cardTwoId = $($cardsChosenId[1]);

    if ($cardsChosen[0] === $cardsChosen[1]) {
      console.log($cardOneId);
      alert("Match!");
      $cards.eq($cardsChosenId[0]).attr("src", "images/letter_x_200.jpg");
      $cards.eq($cardsChosenId[1]).attr("src", "images/letter_x_200.jpg");
      //Push matched cards to array, so can't be chosen again
      $matchedCards.push($cardsChosen);

      score += 10;
      $($player1Score).text(score);
    } else {
      //flip them back over and display Sesame St logo card
      alert("Not a match! Try again");
      $cards.eq($cardsChosenId[0]).attr("src", "images/logo_200.jpg");
      $cards.eq($cardsChosenId[1]).attr("src", "images/logo_200.jpg");
    }

    //Clear out arrays so you can make another selection
    $cardsChosen = [];
    $cardsChosenId = [];

    if ($matchedCards.length === cardArray.length / 2 && time !== 0) {
      alert("You found them all!");
    //   userWins();
    //   changePlayer();
    }
    else {
    //   alert("You lose!");
    }
  };

  //flip cards

  const flipCard = (event) => {
    const $dataId = $(event.currentTarget).data("id");
    console.log($dataId);

    $cardsChosen.push(cardArray[$dataId].name);
    console.log($cardsChosen);

    $cardsChosenId.push($dataId);
    console.log($cardsChosenId);

    $("img").eq($dataId).attr("src", cardArray[$dataId].img);

    if ($cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };

  buildBoard();

  //   const board = $("div#board");
  //   console.log(board);
  //   const data = [
  //     {
  //       name: "a",
  //       id: 0,
  //     },
  //     {
  //       name: "b",
  //       id: 1,
  //     },
  //     {
  //       name: "c",
  //       id: 2,
  //     },
  //     {
  //       name: "d",
  //       id: 3,
  //     },
  //     {
  //       name: "a",
  //       id: 4,
  //     },
  //     {
  //       name: "b",
  //       id: 5,
  //     },
  //     {
  //       name: "c",
  //       id: 6,
  //     },
  //     {
  //       name: "d",
  //       id: 7,
  //     },
  //   ];
  //   const buildBoard = (el, list) => {
  //     return el.html(
  //       list
  //         .map((item) => {
  //           return `<div data-name="${item.name}" id="${item.id}">${item.name}</div>`;
  //         })
  //         .join("")
  //     );
  //   };
  //   const $board = $(buildBoard(board, data));
  //   let valuesToCheck = [];
  //   for (let i = 0; i < $board.children().length; i++) {
  //     $board
  //       .children()
  //       .eq(i)
  //       .on("click", () => {
  //         valuesToCheck.push($board.children().eq(i));
  //       });
  //   }
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
    

