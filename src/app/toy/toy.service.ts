import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Toy } from './toy';

@Injectable()
export class ToyService {
    constructor(private http: Http) {}

    getToys(category: string, categoryType: string): Promise<Toy[]> {
        return this.http.get(`/api/toys?category=${category}&categoryType=${categoryType}`)
            .toPromise()
            .then(response => response.json() as Toy[]);
    }
}