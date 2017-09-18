import { ErrorService } from './../errors/error.service';
import { Http, Response, Headers } from '@angular/http';
import { Prijava } from './prijava.model';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class PrijavaService{
    private prijavas : Prijava [] = [];
    constructor(private http: Http, private errorService: ErrorService){}
    addPrijava(prijava:Prijava){
        const body = JSON.stringify(prijava);
        const headers = new Headers({'Content-type':'application/json'});
        return this.http.post('https://praksa-fonis.herokuapp.com/prijava/'+prijava.praksaid, body, {headers:headers} )
        .map((response:Response)=> {
            const result = response.json();
            const prijava = new Prijava(
                result.obj.ime,
                result.obj.prezime,
                result.obj.mejl,
                result.obj.linkCV,
                result.obj.linkedin,
                result.obj.portfolio,
                result.obj.telefon,
                result.obj.poruka,
                result.obj.praksa._id,
                result.obj.praksa.naziv,
                result.obj._id
            );
            this.prijavas.push(prijava);
            return prijava;            
        })
        .catch((error:Response)=> Observable.throw(error.json()));
    }

    getPrijave(){
        return this.http.get('https://praksa-fonis.herokuapp.com/prijava')
        .map((response:Response)=>{
            const prijavas = response.json().obj;
            let transformedPrijavas: Prijava[] = [];
            for(let prijava of prijavas){
                transformedPrijavas.push(new Prijava(
                    prijava.ime, 
                    prijava.prezime, 
                    prijava.mejl, 
                    prijava.linkCV, 
                    prijava.linkedin, 
                    prijava.portfolio, 
                    prijava.telefon, 
                    prijava.poruka,
                    prijava.praksa._id,
                    prijava.praksa.naziv,
                    prijava._id,
                    ));
            }
            this.prijavas = transformedPrijavas;
            return transformedPrijavas;
        })
        .catch((err: Response) => {
                this.errorService.handleError(err.json());
                return Observable.throw(err.json());
            });
            
    }

    deletePrijava(prijava:Prijava){
        this.prijavas.splice(this.prijavas.indexOf(prijava), 1);
        return this.http.delete('https://praksa-fonis.herokuapp.com/prijava/'+prijava.prijavaid)
        .map((response:Response)=> response.json())
        .catch((error:Response)=> Observable.throw(error.json()));
   
    }

}