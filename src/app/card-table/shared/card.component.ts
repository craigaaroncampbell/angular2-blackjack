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

    
    ngOnInit(): void {
        //cannot put this in  constuctor() because ...?? well it doesn't work anyway
        this.rank = this.card.rank;
        this.suit = this.card.suit;
        this.path = `../../../../svgcards/${this.rank}_of_${this.suit}.svg`;
    }

}