import { Injectable } from '@angular/core';

import { Toy } from './toy';

@Injectable()
export class ToyService {
    getToys() {
        return this.mockToys();
    }

    private mockToys() {
        return Array.from(Array(30)).map((element, index) => {
            let toy = new Toy();
            toy.title = `Toy number A${index}`;
            toy.price = Math.random() * 1000;
            
            return toy;
        });
    }
}