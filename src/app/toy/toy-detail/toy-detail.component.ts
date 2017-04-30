import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Toy } from '../toy';
import { ToyService } from '../toy.service';

@Component({
    template: require('./toy-detail.component.html'),
    styles: [require('./toy-detail.component.scss')],
})
export class ToyDetailComponent implements OnInit {
    toy: Toy;
    activeTab: string = 'description';

    constructor(
        private route: ActivatedRoute,
        private toyService: ToyService,
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        this.toyService.getToy(id).then((toy: Toy) => {
            this.toy = toy;
        });
    }
}