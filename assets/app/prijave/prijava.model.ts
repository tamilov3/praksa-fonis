export class Prijava{
    praksaid:string;
    prijavaid: string;
    ime:string;
    prezime:string;
    mejl:string;
    telefon?:string;
    linkedin?:string;
    portfolio?:string;
    linkCV:string;
    poruka?:string;
    praksaNaziv?: string;
    //vidi treba li ti jos sto godj

    constructor(ime:string,prezime:string, mejl:string, linkCV:string, 
        linkedin?:string,portfolio?:string,telefon?:string, poruka?:string,praksaid?:string, praksaNaziv?:string,prijavaid?:string){
        this.praksaid = praksaid;
        this.prijavaid = prijavaid;
        this.prezime= prezime;
        this.ime = ime;
        this.mejl = mejl;
        this.linkCV= linkCV;
        this.linkedin = linkedin;
        this.portfolio = portfolio;
        this.poruka = poruka;   
        this.telefon= telefon;
        this.praksaNaziv = praksaNaziv;
    }
    
}