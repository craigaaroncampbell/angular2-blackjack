import { Component } from '@angular/core';

@Component({
    selector: 'app-game-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']

})
export class ControlsComponent {
    turn: string;

    constructor() {
        this.turn = 'player';
    }

    stay(): void {
        // if hte player stays then it is dealer's turn
        this.turn = 'dealer'
    }

    hit() : void {
        // if it is player's turn: call that hand's getCard() method

        // if it is dealer's turn: call that hand's getCard() method
    }
}