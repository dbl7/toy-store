import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToyModule } from './toy/toy.module';
import { HeaderModule } from './header/header.module';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
    imports: [
        BrowserModule,
        ToyModule,
        HttpModule,
        HeaderModule,
        MainPageModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}