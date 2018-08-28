import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { IYelp } from '../models/yelp.interface';

export interface IYelpService {
    getBusinessByName(name: string): Observable<IYelp>;
}

@Injectable()
export class YelpService implements IYelpService {
    constructor(private restangular: Restangular) {  }

    getBusinessByName(name: string): Observable<IYelp> {
        return this.restangular.one(`/businesses/search?term=${name}&categories=food,All&latitude=36.696130&longitude=-121.619065`).get();
    }
}
