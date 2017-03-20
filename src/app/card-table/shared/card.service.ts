import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable()
export class CardService {

    suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    
    getCard(): Card {
        let suitNumber = Math.floor(Math.random()*this.suits.length);
        let rankNumber = Math.floor(Math.random()*this.ranks.length);
        return {rank: this.ranks[rankNumber], suit: this.suits[suitNumber]}
    }
}