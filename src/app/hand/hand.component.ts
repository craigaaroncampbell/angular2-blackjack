import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.model';
import { CardService } from '../card/card.service';

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

    flipCard() : void {
        // should only be used for dealer hand on start of dealer's turn
        if (this.role === 'dealer') {
            // this.cards[1].faceDown = false;
            alert("I want to flip the dealer's card over when i hit this button.. nope... i need to deal with the component. maybe try viewchild ?")
        }

    }

    ngOnInit(): void {
        this.getStartingHand();
    }
}