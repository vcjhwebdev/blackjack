var deckOfCards = [];
var cardValSum = 0
var hit = document.querySelector('.hit');
var hold = document.querySelector('.hold')
var dealerTurn = false

hit.addEventListener('click', function(e) {

  var nextCard = deckOfCards.pop();
  if (cardValSum < 21){

  if(nextCard !== undefined) {

        var cardSplit = nextCard.split("_");
        var cardVal = cardSplit[1];
        if (cardVal == "jack" || cardVal == "queen" || cardVal == "king") {
          cardVal = 10
        }
        else {
          cardVal = parseInt(cardVal)
        }

        cardValSum += cardVal


        var img = document.createElement("img");

        img.src = "img/cards/1x/" + nextCard + ".png";
        var src = document.getElementById("nextPlayCard");
        console.log(cardVal)




          src.appendChild(img);

        }
    }

    else {
        console.log("BUST")
    }
});


hit.addEventListener('click', function(e) {
  var src = e.target.src;
});



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
function Dealer(){
  console.log("Dealers Turn");

while (cardValSum < 18) {
   nextCard = deckOfCards.pop();

  if(nextCard !== undefined) {

        cardSplit = nextCard.split("_");
        cardVal = cardSplit[1];
        if (cardVal == "jack" || cardVal == "queen" || cardVal == "king") {
          cardVal = 10
        }
        else {
          cardVal = parseInt(cardVal)
        }

        cardValSum += cardVal


        var img = document.createElement("img");

        img.src = "img/cards/1x/" + nextCard + ".png";
        var src = document.getElementById("dealerPlayCard");
        console.log(cardVal)




          src.appendChild(img);


        }
    }
  cardValSum = 0

}
function Player(){
  console.log("Players Turn");
}
deckOfCards = shuffle(cardsArr);
//console.log(deckOfCards);
