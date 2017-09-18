export class Praksa{
    praksaid:string;
    naziv:string;
    kompanija:string;
    pozicija:string;
    kategorija:string;
    opis:string;
    tagovi: string [];
    //ovde i u konstruktor treba dodati ostave stavke

    constructor(naziv:string,kompanija:string,opis:string,pozicija:string, kategorija:string, tagovi?: string[], praksaid?:string){
        this.naziv = naziv;
        this.kompanija = kompanija;
        this.pozicija = pozicija;
        this.kategorija = kategorija;
        this.opis = opis;
        this.tagovi = tagovi;
        this.praksaid = praksaid;
    }
    
}