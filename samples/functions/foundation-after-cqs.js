var increasingRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

function FoundationPile(cards){
    this.cards = cards || [];

    this.dropCard = function (card){
        var canDropCard = this.canDropCard(card);
        if (canDropCard){
            this.cards[this.cards.length] = card;
        }
        return canDropCard;
    };

    this.canDropCard = function (card){
        var canDropCard = false;
        var noCards = this.cards.length === 0;
        if (noCards){
            if (card.rank === "Ace"){
                canDropCard = true;
            }
        }
        else{
            var topCard = this.cards[this.cards.length - 1];
            var nextRank = increasingRanks[increasingRanks.indexOf(topCard.rank) + 1];
            var cardIsNextRankInSuit = topCard.suit === card.suit && card.rank === nextRank;
            if (cardIsNextRankInSuit){
                canDropCard = true;
            }
        }
        return canDropCard;
    };
}