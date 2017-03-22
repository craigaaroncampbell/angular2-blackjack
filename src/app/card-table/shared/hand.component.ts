import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card.model';
import { CardService } from './card.service';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrls: ['./hand.component.css']

})
export class HandComponent implements OnInit {
    cards: Card[];
    @Input() role: string;


    constructor(private cardService: CardService) {
        this.cards = [];
       
    }

    getCard(): void {

        let newCard = this.cardService.getCard();
   
        this.cards.push(newCard);
    }

    getStartingHand(): void {
        this.getCard();
        this.getCard();
        // 2nd card facedown for dealer
        if (this.role === 'dealer') this.cards[1].faceDown = true;
    }

    ngOnInit(): void {
        this.getStartingHand();
    }
}