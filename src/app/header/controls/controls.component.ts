import { Component } from '@angular/core';

@Component({
    selector: 'app-game-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']

})
export class ControlsComponent {
    hit() : void {
        // if it is player's turn: call that hand's getCard() method

        // if it is dealer's turn: call that hand's getCard() method
    }
}