import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // imports a library for using Angular in a web browser

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent] // tells Angular to bootstrap with AppComponent
})
export class AppModule {

}