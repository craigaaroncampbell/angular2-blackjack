import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent, ControlsComponent } from './header/index';
import { CardTableComponent } from './card-table/index';

@NgModule({
    imports: 
    [
        BrowserModule
    ],

    declarations: 
    [
        AppComponent,
        HeaderComponent,
        ControlsComponent,
        CardTableComponent,
    ],

    bootstrap:  [ AppComponent],
    
    providers: []

})
export class AppModule{

};