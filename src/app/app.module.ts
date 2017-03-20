import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// import {ButtonModule} from 'primeng/components/button/button';
import {ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeaderComponent, ControlsComponent } from './header/index';
import { CardTableComponent, HandComponent, CardComponent, CardService } from './card-table/index';


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
        HeaderComponent,
        ControlsComponent,
        CardTableComponent,
        HandComponent,
        CardComponent
    ],

    bootstrap:  [ AppComponent],
    
    providers: [CardService]

})
export class AppModule{

};