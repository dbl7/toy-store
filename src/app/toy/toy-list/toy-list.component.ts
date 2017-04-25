import { Component, Input } from '@angular/core';

import { Toy } from '../toy';
import { ToyService } from '../toy.service';

@Component({
    selector: 'toy-list',
    template: require('./toy-list.component.html'),
    styles: [require('./toy-list.component.scss')],
})
export class ToyListComponent {
    @Input() toys: Toy[];
}