var increasingRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

function FoundationPile(cards){
    this.cards = cards || [];

    this.dropCard = function (card){
        var acceptedCard = false;
        var noCards = this.cards.length === 0;
        if (noCards){
            if (card.rank === "Ace"){
                this.cards[this.cards.length] = card;
                acceptedCard = true;
            }
        }
        else{
            var topCard = this.cards[this.cards.length - 1];
            var nextRank = increasingRanks[increasingRanks.indexOf(topCard.rank) + 1];
            var cardIsNextRankInSuit = topCard.suit === card.suit && card.rank === nextRank;
            if (cardIsNextRankInSuit){
                this.cards[this.cards.length] = card;
                acceptedCard = true;
            }
        }
        return acceptedCard;
    };
}