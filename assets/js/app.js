var deckOfCards = [];

var hit = document.querySelector('.hit');
var playerCard = document.querySelector('.player')



hit.addEventListener('click', function(e) {

  var nextCard = deckOfCards.pop();
  if(nextCard !== undefined) {
     playerCard.src = "img/cards/1x/" + nextCard + ".png";

  }
});

cardInPlay.addEventListener('click', function(e) {
  var src = e.target.src;
  alert('You clicked on a card in play. It\'s file is ' + src);
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
deckOfCards = shuffle(cardsArr);
