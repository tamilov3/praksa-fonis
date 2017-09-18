import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

import { Potkategorija } from './potkategorija.model';

@Injectable()
export class PotkategorijaService{
    private potkategorijas: Potkategorija[]=[];
    constructor(private http: Http,private errorService: ErrorService) {}
    getPotkategorije(){
        return this.http.get('https://praksa-fonis.herokuapp.com/potkategorija')
        .map((response: Response) => {
            const potkategorijas = response.json().obj;
            let transformedPotkategorijas: Potkategorija[] = [];
            for (let potkategorija of potkategorijas) {
                transformedPotkategorijas.push(new Potkategorija(potkategorija.naziv)
                );
            }
            this.potkategorijas = transformedPotkategorijas;
            return transformedPotkategorijas;
        })
        .catch((error: Response) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }

}