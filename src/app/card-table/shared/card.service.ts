import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable()
export class CardService {

    suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    cardsOnTable: Card[] = [];

    getCard(): Card {
        let suitNumber: number;
        let rankNumber: number;
        let card: Card;
        var continueNow: boolean;
        
        // keep drawing a new random card until it is not one that has been drawn before.. bit this is ugly code :( 
        while (true) {
            continueNow = false;
            suitNumber = Math.floor(Math.random()*this.suits.length);
            rankNumber = Math.floor(Math.random()*this.ranks.length);
            card = {rank: this.ranks[rankNumber], suit: this.suits[suitNumber], faceDown: false}

            for (var i = 0; i < this.cardsOnTable.length; i++) {
                console.log("card#:", i)

                if (this.cardsOnTable[i].rank === card.rank && this.cardsOnTable[i].suit === card.suit) {
                   console.log("this card already has been drawn: " + card.rank + " of " + card.suit);
                   continueNow = true;
                   break;
                }
            }

            if (continueNow) {
                console.log('trying a new random card suit and rank....');
                continue;
            }
          break;
        }

        // if we get here then it is a new unique card
        this.cardsOnTable.push(card);
        return card;
    
    }
}