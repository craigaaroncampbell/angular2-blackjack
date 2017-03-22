import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']

})
export class CardComponent implements OnInit {
    @Input() card: Card;
    path: string;
    rank: string;
    suit: string;
    faceDown: boolean;

    flip() : void {
        this.faceDown = !this.faceDown;
        this.path = this.faceDown ?  `../../../../svgcards/cardback_of_cardback.svg` : `../../../../svgcards/${this.rank}_of_${this.suit}.svg`;
    }

    ngOnInit(): void {
        //cannot put this in  constuctor() because ...?? well it doesn't work anyway
        this.rank = this.card.rank;
        this.suit = this.card.suit;
        this.faceDown = this.card.faceDown;
        this.path = this.faceDown ?  `../../../../svgcards/cardback_of_cardback.svg` : `../../../../svgcards/${this.rank}_of_${this.suit}.svg`;
    }

}