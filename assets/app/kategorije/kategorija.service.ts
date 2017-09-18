import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

import { Kategorija } from './kategorija.model';

@Injectable()
export class KategorijaService{
    private kategorijas: Kategorija[]=[];
    constructor(private http: Http,private errorService: ErrorService) {}
    getKategorije(){
        return this.http.get('https://praksa-fonis.herokuapp.com/kategorija')
        .map((response: Response) => {
            const kategorijas = response.json().obj;
            let transformedKategorijas: Kategorija[] = [];
            for (let kategorija of kategorijas) {
                transformedKategorijas.push(new Kategorija(kategorija.naziv)
                );
            }
            this.kategorijas = transformedKategorijas;
            return transformedKategorijas;
        })
        .catch((error: Response) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }

}