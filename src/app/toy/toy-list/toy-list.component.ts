import { Component, OnInit } from '@angular/core';

import { Toy } from '../toy';
import { ToyService } from '../toy.service';

@Component({
    selector: 'toy-list',
    template: require('./toy-list.component.html'),
    styles: [require('./toy-list.component.scss')],
    providers: [ToyService],
})
export class ToyListComponent implements OnInit {
    toys: Toy[];

    constructor(private toyService: ToyService) {}

    ngOnInit() {
        this.toys = this.toyService.getToys();
    }
}