import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';

import { Toy } from '../toy';
import { ToyService } from '../toy.service';

@Component({
    template: require('./toy-dashboard.component.html'),
    styles: [require('./toy-dashboard.component.scss')],
})
export class ToyDashboardComponent implements OnInit {
    toys: Toy[];
    constructor(private route: ActivatedRoute, private toyService: ToyService) {}

    ngOnInit() {
        this.route.url
            .subscribe(urls => {
                this.toys = null;
                const [category, categoryType] = urls.map((url: UrlSegment) => url.path);

                this.toyService.getToys(category, categoryType).then(toys => {
                    this.toys = toys;
                });
            });
    }
}