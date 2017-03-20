import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrls: ['./hand.component.css']

})
export class HandComponent implements OnInit {
    cards: Card[];

    constructor() {
        this.cards = [];
        
    }

    ngOnInit(): void {
        this.cards.push({suit: 'clubs', rank: '2'})
    }
}