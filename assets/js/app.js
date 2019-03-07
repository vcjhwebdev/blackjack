var deckOfCards = [];
var playerCardValSum = 0;
var dealerCardValSum = 0;

var hit = document.querySelector('.hit');
var hold = document.querySelector('.hold');
var newGame = document.querySelector('.new-game');
var bet = document.querySelector('.bet');
var allIn = document.querySelector('.allIn')
var money = 500;
var betAmount = 0;
var dealerTurn = false;
var endGame = true
var numOfPlayerCards = 0;
var numOfDealerCards = 0;

bet.addEventListener('click', function(e) {
if (endGame == true) {
  var button = e.target;
  var bet = parseInt(button.textContent);
  if (bet > money) {
  alert("Sorry, you don't have enough money to bet that much!")
  }
  else {
    money -= bet;
    betAmount += bet;
  }
  document.getElementById('money').innerHTML = 'Money: ' + money;
  document.getElementById('betAmountLbl').innerHTML = 'Bet this round: ' + betAmount;
  }
  else {
    alert("You can only bet at the start of your turn")
  }
});

hit.addEventListener('click', function(e) {

  endGame = false;
  var firstHit = true;
  console.log("Players Turn");

  var nextCard = deckOfCards.pop();
  if (playerCardValSum < 21){

  if(nextCard !== undefined) {
        numOfPlayerCards += 1;
        var cardSplit = nextCard.split("_");
        var cardVal = cardSplit[1];
        if (cardVal == "jack" || cardVal == "queen" || cardVal == "king") {
          cardVal = 10;
        }
        else {
          cardVal = parseInt(cardVal);
        }

        playerCardValSum += cardVal;


        var img = document.createElement("img"); // <img>

        img.src = "img/cards/1x/" + nextCard + ".png"; // <img src="">

        img.style.top = (numOfPlayerCards * 30 - 40) + "px";

        var src = document.getElementById("nextPlayCard");
        console.log(cardVal);

          src.appendChild(img);

          dealerTurn = true;

        }
    }


});

hold.addEventListener('click', function(e) {



    if (dealerTurn === true) {
      console.log("Dealers Turn");

      while (dealerCardValSum < 16) {


        nextCard = deckOfCards.pop();

        if(nextCard !== undefined) {
          numOfDealerCards += 1
          cardSplit = nextCard.split("_");
          cardVal = cardSplit[1];

          if (cardVal == "jack" || cardVal == "queen" || cardVal == "king") {
            cardVal = 10;
          }
          else {
            cardVal = parseInt(cardVal);
          }

          dealerCardValSum += cardVal;


          var img2 = document.createElement("img");

          img2.src = "img/cards/1x/" + nextCard + ".png";
          img2.style.top = (numOfDealerCards * 30 + 20) + "px";
          var src2 = document.getElementById("dealerPlayCard");
          console.log(cardVal);

            src2.appendChild(img2);
          }



    }
    setTimeout(function(){
      if (playerCardValSum == 21 && dealerCardValSum != 21) {
        alert('BlackJack! You win!');
        money += 2 * betAmount;
      }
      else if (dealerCardValSum == 21 && playerCardValSum != 21) {
        alert('BlackJack of Dealer! You Lose!');
      }
      else if (dealerCardValSum == 21 && playerCardValSum == 21){
        alert('Two way BlackJack! Push!')
        money += betAmount;
      }
      else if(playerCardValSum == dealerCardValSum){
        alert ('Push!');
        money += betAmount;
      }
      else if (playerCardValSum > 21 && dealerCardValSum > 21){
        alert('Two way Bust! Push!');
        money += betAmount;
      }
      else if (playerCardValSum > 21 && dealerCardValSum < 21) {
        alert('BUST! You lose!');
      }
      else if(dealerCardValSum > 21 && playerCardValSum < 21) {
        alert ('Dealer BUST! You win!');
        money += 2 * betAmount;
      }
      else if (playerCardValSum > dealerCardValSum) {
        alert('You Win!');
        money += 2 * betAmount;
      }
      else if (dealerCardValSum > playerCardValSum){
        alert('You Lose!');
      }
    betAmount = 0;
    document.getElementById('money').innerHTML = 'Money: ' + money;
    document.getElementById('betAmountLbl').innerHTML = 'Bet this round: ' + betAmount
    if (money < 5) {
      alert("Sorry you have no more money!");

    }
    numOfDealerCards = 0;
    numOfPlayerCards = 0;
    playerCardValSum = 0;
    dealerCardValSum = 0;
    dealerTurn = false;
    endGame = true
    document.getElementById('dealerPlayCard').innerHTML = ''
    document.getElementById('nextPlayCard').innerHTML = ''

    // clear the <img> tags from dealer...
    cardsArr = ["club_jack", "club_queen", "club_king", "diamond_jack", "diamond_queen", "diamond_king", "heart_jack", "heart_queen", "heart_king", "spade_jack", "spade_queen", "spade_king"];
    for (i=1; i<=10; i++) {
      cardsArr.push("club_" + i);
      cardsArr.push("diamond_" + i);
      cardsArr.push("heart_" + i);
      cardsArr.push("spade_" + i);
    }
    deckOfCards = shuffle(cardsArr);


  }, 1000);

  }
});

newGame.addEventListener('click', function(e) {
  location.reload();
  /**if (endGame == true) {

    document.getElementById('dealerPlayCard').innerHTML = ''
    document.getElementById('nextPlayCard').innerHTML = ''

    // clear the <img> tags from dealer...
    deckOfCards = shuffle(cardsArr);
    endGame = false;
    money = 500
}
  // and player
  **/

  // re-deal
});
allIn.addEventListener('click', function(e) {
    if (endGame == true) {

      var bet = money;
      money -= bet;
      betAmount += bet;
    }
    else {
      alert("You can only bet at the start of your turn")
    }
    document.getElementById('money').innerHTML = 'Money: ' + money;
    document.getElementById('betAmountLbl').innerHTML = 'Bet this round: ' + betAmount;


});



  //function newGame() {
  //deckOfCards = shuffle(cardsArr);

  //}

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  var cardsArr = ["club_jack", "club_queen", "club_king", "diamond_jack", "diamond_queen", "diamond_king", "heart_jack", "heart_queen", "heart_king", "spade_jack", "spade_queen", "spade_king"];
  for (i=1; i<=10; i++) {
    cardsArr.push("club_" + i);
    cardsArr.push("diamond_" + i);
    cardsArr.push("heart_" + i);
    cardsArr.push("spade_" + i);
  }

deckOfCards = shuffle(cardsArr);
  //deckOfCards = shuffle(cardsArr);




//console.log(deckOfCards);
