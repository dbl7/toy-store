import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToyModule } from './toy/toy.module';
import { HeaderModule } from './header/header.module';

@NgModule({
    imports: [
        BrowserModule,
        ToyModule,
        HttpModule,
        HeaderModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}