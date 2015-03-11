// previous style: new Card("Spades", "Ace");

new Card({
    suit: "Spades",
    rank: "Ace",
    other: "1"
});

function Card(card){
    this.suit = card.suit;
    this.rank = card.rank;
    this.turnedUp = card.turnedUp;

    this.color = function (){
        var isRed = this.suit === "Hearts" || this.suit === "Diamonds";
        return isRed ? "red" : "black";
    }
}
