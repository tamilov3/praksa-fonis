import { Injectable , EventEmitter} from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import { Praksa } from './praksa.model';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class PraksaService{
    private praksas: Praksa[] = [];
    praksaIsEdit = new EventEmitter<Praksa>();

    constructor(private http: Http){}

    addPraksa(praksa:Praksa){
        const body = JSON.stringify(praksa);
        const headers = new Headers({'Content-type':'application/json'});
        return this.http.post('https://praksa-fonis.herokuapp.com/praksa', body, {headers:headers} )
        .map((response:Response)=> {
            const result = response.json();
            const praksa =  new Praksa(result.obj.naziv, result.obj.kompanija, result.obj.opis, result.obj.pozicija, result.obj.kategorija, result.obj.tagovi, result.obj._id);
            this.praksas.push(praksa);
            return praksa;            
        })
        .catch((error:Response)=> Observable.throw(error.json()));
    }

    getPraksas(){
        return this.http.get('https://praksa-fonis.herokuapp.com/praksa')
        .map((response:Response)=>{
            const praksas = response.json().obj;
            let transformedPraksas: Praksa[] = [];
            for(let praksa of praksas){
                transformedPraksas.push(new Praksa(praksa.naziv, praksa.kompanija, praksa.opis, praksa.pozicija, praksa.kategorija, praksa.tagovi, praksa._id))
            }
            this.praksas = transformedPraksas;
            return transformedPraksas;
        })
        .catch((error:Response)=> Observable.throw(error.json()));
    }


    deletePraksa(praksa:Praksa){
        this.praksas.splice(this.praksas.indexOf(praksa), 1);
        return this.http.delete('https://praksa-fonis.herokuapp.com/praksa/'+praksa.praksaid)
        .map((response:Response)=> response.json())
        .catch((error:Response)=> Observable.throw(error.json()));
    }

    editPraksa(praksa:Praksa){
        this.praksaIsEdit.emit(praksa);
    }
    updatePraksa(praksa:Praksa){
        const body = JSON.stringify(praksa);
        const headers = new Headers({'Content-type':'application/json'});
        return this.http.patch('https://praksa-fonis.herokuapp.com/praksa/'+praksa.praksaid, body, {headers:headers} )
        .map((response:Response)=> response.json())
        .catch((error:Response)=> Observable.throw(error.json()));
    }
}