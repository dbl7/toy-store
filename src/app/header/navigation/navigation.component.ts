import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    template: require('./navigation-component.html'),
    styles: [require('./navigation-component.scss')],
})
export class NavigationComponent {
    menus = [{
        name: 'toys',
        submenus: [
            'atrs and crafts',
            'dolls',
            'ellectronics toys',
            'puzzles',
            'books',
        ],
    }, {
        name: 'outdoors',
        submenus: [
            'backpaks',
            'beach toys',
            'bicycles',
            'playhouses',
            'water guns',
        ],
    }, {
        name: 'nursery',
        submenus: [
            'nursery accessories',
            'cutlery sets',
            'feeding bottle',
            'gift sets',
        ],
    }];
}