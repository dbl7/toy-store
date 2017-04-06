import { Component, OnChanges, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { Toy } from '../toy';
import { ToyService } from '../toy.service';

@Component({
    selector: 'toy-list',
    template: require('./toy-list.component.html'),
    styles: [require('./toy-list.component.scss')],
    providers: [ToyService],
})
export class ToyListComponent implements OnChanges {
    @Input() category: string;
    @Input() categoryType: string;

    toys: Toy[];

    constructor(private toyService: ToyService, private router: Router) {}

    ngOnChanges({ category, categoryType }: { category: SimpleChange, categoryType: SimpleChange }) {
        this.toyService.getToys(this.category, this.categoryType).then(toys => {
            this.toys = toys;
        });
    }
}