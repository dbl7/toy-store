import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ToyListComponent } from './toy-list/toy-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ToyListComponent],
    exports: [ToyListComponent],
})
export class ToyModule {}