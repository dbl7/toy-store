import { Component, OnInit } from '@angular/core';

import { Toy } from '../toy/toy';
import { ToyService } from '../toy/toy.service';

@Component({
    selector: 'main-page',
    template: require('./main-page.component.html'),
    styles: [require('./main-page.component.scss')],
})
export class MainPageComponent implements OnInit {
    toys: Toy[];

    constructor(private toyService: ToyService) {}

    ngOnInit() {
        this.toyService.popularToys().then(toys => {
            this.toys = toys;
        });
    }
}