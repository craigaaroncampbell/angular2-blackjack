import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { CardService } from './card.service';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrls: ['./hand.component.css']

})
export class HandComponent implements OnInit {
    cards: Card[];

    constructor(private cardService: CardService) {
        this.cards = [];
        
        
    }

    getCard(): Card {
       return this.cardService.getCard();
    }
    ngOnInit(): void {
        //TODO: make sure that the second (and any subsequent cards) are not duplicates - this applies to ALL hands NOT just this one!
        this.cards.push(this.getCard());
        this.cards.push(this.getCard());

    }
}