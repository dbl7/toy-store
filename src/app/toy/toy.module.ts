import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyDashboardComponent } from './toy-dashboard/toy-dashboard.component';
import { ToyService } from './toy.service';

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
    providers: [ToyService],
})
export class ToyModule {}