import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']

})
export class ControlsComponent {
    turn: string;

    @Output() dealerHit : EventEmitter<any> = new EventEmitter();
    @Output() playerHit : EventEmitter<any> = new EventEmitter();
    @Output() flipDealerCard : EventEmitter<any> = new EventEmitter();

    constructor() {
        this.turn = 'player';
    }

    stay(): void {
        // if hte player stays then it is dealer's turn
        //applaies to ALL instances of this class
        this.turn = 'dealer'
        this.flipDealerCard.emit(null);

    }

    hit() : void {

        // if it is player's turn: call that hand's getCard() method otherwise dealer hand's getCard()
        if (this.turn === 'player') {
            this.playerHit.emit(null);
        } else {
            this.dealerHit.emit(null);
        }
     
    }
}