import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToyModule } from './toy/toy.module';

@NgModule({
    imports: [
        BrowserModule,
        ToyModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}