import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PrijavaService } from './../prijave/prijava.service';
import { PraksaService } from './praksa.service';
import { Praksa } from './praksa.model'; import { } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-praksa-list',
    template: `
    <div class="col-md-8 col-md-offset-2">
        
            <div class="btn-group pretraga" role="group">
                
                <button type="button" *ngFor="let labela of labele"  
                (click)="onChange(labela)" 
                class="btn btn-default dugme">{{labela}}</button>
            </div>
        
        
        <app-praksa
            [praksa]="praksa"
                *ngFor="let praksa of praksas | tag:selektovanTag">
                
        </app-praksa>
        
    </div>
    `,
    providers: [PrijavaService],
    styles: [`
        .pretraga{
            width:100%;
            padding-left:4%;
            padding-bottom: 2%;

        }
        .dugme{
            border:none;
            background-color:#E8E8E8;
            
        }
        
    `]
})
export class PraksaListComponent implements OnInit {
    praksas: Praksa[];
    labele: string[] = ['SVI','JAVA', 'PHP', '.NET', 'FRONTEND', 'JS', 'ANDROID', 'IOS', 'QA', 'PYTHON', 'LINUX'];
    pomocnePrakse: Praksa[];
    selektovanTag="";
    constructor(private praksaService: PraksaService) { }

    ngOnInit() {
        this.praksaService.getPraksas()
            .subscribe(
            (praksas: Praksa[]) => {
                this.praksas = praksas;
            }
            );
    }
    onChange(labela) {
        this.selektovanTag=labela;
        console.log(this.selektovanTag);
    }
    onSubmit(){
        this.praksaService.getPraksas();
    }
}