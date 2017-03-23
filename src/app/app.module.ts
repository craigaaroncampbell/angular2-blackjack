import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import {  ControlsComponent } from './controls/index';
import { HandComponent } from './hand/index';
import { CardComponent, CardService } from './card/index';


@NgModule({
    imports: 
    [
        BrowserModule,
        FormsModule,
        HttpModule,
        ButtonModule,
    ],

    declarations: 
    [
        AppComponent,
        ControlsComponent,
        HandComponent,
        CardComponent
    ],

    bootstrap:  [ AppComponent],
    
    providers: [CardService]

})
export class AppModule{

};