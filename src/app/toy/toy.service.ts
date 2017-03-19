import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Toy } from './toy';

@Injectable()
export class ToyService {
    constructor(private http: Http) {}

    getToys(): Promise<Toy[]> {
        return this.http.get('/api/toys/all')
            .toPromise()
            .then(response => response.json() as Toy[]);
    }
}