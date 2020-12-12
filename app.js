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
    {
      name: "Bert",
      img: "images/bert_200.jpg",
    },
    {
      name: "Bert",
      img: "images/bert_200.jpg",
    },
    {
      name: "Ernie",
      img: "images/ernie_200.jpg",
    },
    {
      name: "Ernie",
      img: "images/ernie_200.jpg",
    },
    {
      name: "Count",
      img: "images/count_200.jpg",
    },
    {
      name: "Count",
      img: "images/count_200.jpg",
    },
    {
      name: "Grover",
      img: "images/grover_200.jpg",
    },
    {
      name: "Grover",
      img: "images/grover_200.jpg",
    }
  ];

//   Shuffle Cards with Fisher-Yates method
 shuffleCards = () => {
  for (i = cardArray.length - 1; i > 0; i--) {
   j = Math.floor(Math.random() * i);
   k = cardArray[i];
   cardArray[i] = cardArray[j];
   cardArray[j] = k;
 } 
}

  
  //Empty arrays to store cards chosen and Ids of cards
  let cardsChosen = [];
  let cardsChosenId = [];
  const matchedCards = [];

  //Countdown clock

    let time = 30;
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
        alert("Game over!");
      }
    }, 1000); 


  //Loop over each card in the array, create img element for each card, add logo to each card, add event listener to each card, append to cards-wrapper
  const $board = $(".cards-wrapper");
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

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Match!");
      $cards.eq(cardsChosenId[0]).attr("src", "images/letter_x_200.jpg");
      $cards.eq(cardsChosenId[1]).attr("src", "images/letter_x_200.jpg");
      //Push matched cards to array, so can't be chosen again
      matchedCards.push(cardsChosen);

    } else {
      //flip them back over and display Sesame St logo card
      alert("Not a match! Try again");
      $cards.eq(cardsChosenId[0]).attr("src", "images/logo_200.jpg");
      $cards.eq(cardsChosenId[1]).attr("src", "images/logo_200.jpg");
    }

    //Clear out arrays so you can make another selection
    cardsChosen = [];
    cardsChosenId = [];

    if (matchedCards.length === cardArray.length / 2) {
      alert("Hooray! You matched all the cards!");
      clearInterval(interval);
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


const startGame = () => {
     buildBoard();
     shuffleCards();
}

startGame()

 

});


    

