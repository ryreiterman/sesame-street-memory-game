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
        img: "images/cookie_monster_200.jpg"
      },
      {
        name: "Cookie Monster",
        img: "images/cookie_monster_200.jpg"
      },
      {
        name: "Elmo",
        img: "images/elmo_200.jpg"
      },
      {
        name: "Elmo",
        img: "images/elmo_200.jpg"
      },
      {
        name: "Bert",
        img: "images/bert_200.jpg"
      },
      {
        name: "Bert",
        img: "images/bert_200.jpg"
      },
      {
        name: "Ernie",
        img: "images/ernie_200.jpg"
      },
      {
        name: "Ernie",
        img: "images/ernie_200.jpg"
      },
      {
        name: "Count",
        img: "images/count_200.jpg"
      },
      {
        name: "Count",
        img: "images/count_200.jpg"
      },
      {
        name: "Grover",
        img: "images/grover_200.jpg"
      },
      {
        name: "Grover",
        img: "images/grover_200.jpg"
      }
    ];

    const $board = $(".cards-wrapper");
    
    const $cardsChosen = [];
    const $cardsChosenId = [];

    //Loop over each card in the array, create img element for each card, add logo to each card, add event listener to each card, append to cards-wrapper
    const buildBoard = () => {
        for(i = 0; i < cardArray.length; i++) {
            let $card = $("<img>");
            $card.attr("src", "images/logo_200.jpg");
            $card.attr("data-id", i);
            $card.attr("data-img", cardArray[i].img);
            $card.on("click", flipCard);
            $board.append($card);
        }
        
    }

    //check if cards match
    const checkForMatch = () => {
        const $cards = $("img");
        const $cardOneId = $($cardsChosenId[0]);
        const $cardTwoId = $($cardsChosenId[1]);

        if($cardsChosenId[0] === $cardsChosenId[1]) {
            
            alert("Match!");
        }
        else {
            alert("Not a match");
        }
    }

    //flip cards

    const flipCard = event => {
        

        const $dataId = $(event.currentTarget).data("id");
        console.log($dataId);

        $cardsChosen.push(cardArray[$dataId].name);
        console.log($cardsChosen);

        $cardsChosenId.push($dataId);
        console.log($cardsChosenId);

        $("img").eq($dataId).attr("src", cardArray[$dataId].img);

        if($cardsChosen.length === 2) {
            checkForMatch();
        }
        
    }


    
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
    

