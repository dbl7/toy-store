import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';

@Component({
    template: require('./toy-dashboard.component.html'),
    styles: [require('./toy-dashboard.component.scss')],
})
export class ToyDashboardComponent implements OnInit {
    category: string;
    categoryType: string;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.url
            .subscribe(urls => {
                const [category, categoryType] = urls.map((url: UrlSegment) => url.path);
                this.category = category;
                this.categoryType = categoryType;
            });
    }
}