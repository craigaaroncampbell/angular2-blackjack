import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']

})
export class CardComponent {
    path: string;
    rank: string;
    suit: string;

    constructor() {
        this.rank = 'jack';
        this.suit = 'spades2';
        this.path = `../../../../svgcards/${this.rank}_of_${this.suit}.svg`;
    }
}