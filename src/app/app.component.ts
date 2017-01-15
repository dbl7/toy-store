import { Component } from '@angular/core';

import '../assets/styles/style.scss';

@Component({
    selector: 'toy-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent {}