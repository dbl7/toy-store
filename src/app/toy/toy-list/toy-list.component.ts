import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Toy } from '../toy';
import { ToyService } from '../toy.service';

@Component({
    selector: 'toy-list',
    template: require('./toy-list.component.html'),
    styles: [require('./toy-list.component.scss')],
})
export class ToyListComponent {
    @Input() toys: Toy[];

    constructor(private router: Router) {}

    goto(toy: Toy) {
        this.router.navigate([`/${toy.category}/${toy.categoryType}/${toy._id}`]);
    }
}