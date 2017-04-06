import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyDashboardComponent } from './toy-dashboard/toy-dashboard.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ToyListComponent,
        ToyDashboardComponent,
    ],
    exports: [
        ToyListComponent,
        ToyDashboardComponent,
    ],
})
export class ToyModule {}