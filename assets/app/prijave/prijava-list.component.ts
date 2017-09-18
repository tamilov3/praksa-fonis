import { PrijavaService } from './prijava.service';

import { Prijava } from './prijava.model';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-prijava-list',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <app-prijava
         [prijava]="prijava"
            *ngFor="let prijava of prijavas">
        </app-prijava>
    </div>
    `
})
export class PrijavaListComponent implements OnInit{
    prijavas: Prijava[];/* =[
        new Prijava('Tamara', 'Naumovic', 'tamara@naumovic.com', 'http://www.google.com'),
        new Prijava('Milica', 'Naumovic', 'milica@naumovic.com', 'cv/milica'),
        new Prijava('Mila', 'Milanovic', 'mila@milanovic.com', 'cv/mila')
        
    ]; */
    constructor(private prijavaService: PrijavaService){}

    ngOnInit(){
        this.prijavaService.getPrijave()
        .subscribe(
            (prijavas: Prijava[])=>{
                this.prijavas = prijavas;
                console.log(prijavas)
            }
        );

    }
}