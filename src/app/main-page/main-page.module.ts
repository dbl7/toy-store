import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page.component';
import { ToyModule } from '../toy/toy.module';

@NgModule({
    imports: [ToyModule],
    declarations: [MainPageComponent],
    exports: [MainPageComponent],
})
export class MainPageModule {}