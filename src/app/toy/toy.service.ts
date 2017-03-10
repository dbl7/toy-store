import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Toy } from './toy';

@Injectable()
export class ToyService {
    constructor(private http: Http){}

    getToys(): Promise<Toy[]> {
        return this.http.get('/toys/all')
            .toPromise()
            .then(response => {
                return response.json() as Toy[];
            });
    }
}