import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        HeaderComponent,
        NavigationComponent,
    ],
    exports: [HeaderComponent],
})
export class HeaderModule {}