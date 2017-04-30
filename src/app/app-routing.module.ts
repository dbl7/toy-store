import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ToyDashboardComponent } from './toy/toy-dashboard/toy-dashboard.component';
import { ToyDetailComponent } from './toy/toy-detail/toy-detail.component';

const routes: Routes = [{
    path: 'toys/:type',
    component: ToyDashboardComponent,
}, {
    path: 'outdoors/:type',
    component: ToyDashboardComponent,
}, {
    path: 'nursery/:type',
    component: ToyDashboardComponent,
}, {
    path: ':category/:categoryType/:id',
    component: ToyDetailComponent,
}, {
    path: '',
    component: MainPageComponent,
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}