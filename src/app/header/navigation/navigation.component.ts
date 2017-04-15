import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    template: require('./navigation-component.html'),
    styles: [require('./navigation-component.scss')],
})
export class NavigationComponent {
    menus = [{
        title: 'toys',
        url: 'toys',
        submenus: [
            { title: 'atrs and crafts', url: 'atrs-and-crafts' },
            { title: 'dolls', url: 'dolls' },
            { title: 'ellectronics toys', url: 'ellectronics-toys' },
            { title: 'puzzles', url: 'puzzles' },
            { title: 'books', url: 'books' },
        ],
    }, {
        title: 'outdoors',
        url: 'outdoors',
        submenus: [
            { title: 'backpaks', url: 'backpaks' },
            { title: 'beach toys', url: 'beach-toys' },
            { title: 'bicycles', url: 'bicycles' },
            { title: 'playhouses', url: 'playhouses' },
            { title: 'water guns', url: 'water-guns' },
        ],
    }, {
        title: 'nursery',
        url: 'nursery',
        submenus: [
            { title: 'nursery accessories', url: 'nursery-accessories' },
            { title: 'cutlery sets', url: 'cutlery-sets' },
            { title: 'feeding bottle', url: 'feeding-bottle' },
            { title: 'gift sets', url: 'gift-sets' },
        ],
    }];
}