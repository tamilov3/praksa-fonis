import { PraksaComponent } from './../praksa/praksa.component';
import { PrijavaService } from './prijava.service';
import { Prijava } from './prijava.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-prijava-input',
    templateUrl: './prijava-input.component.html',
    styles:[`
        .leviDiv{
            text-transform: uppercase;
            float: left; width:45%;
            
        }
        .leviDiv label{
            display: block;
        }
        
        .desniDiv{
            text-transform: uppercase;
            float: right; 
            width:45%;
            display: block;
        }
        .desniDiv label{
            display: block;
        }
        .cvDiv{
            text-transform: uppercase;
            float:left; display: block;width:100%; 
        }
        .DesnaLabela{
            float: right;
            font-style: normal;
            font-variant: normal;
            
        }
        .porukaDiv{
            margin-top: 15px;
            margin-bottom:15px;
            text-transform: uppercase;
            float:left; display: block;width:100%; 
        }

    `]
})
export class PrijavaInputComponent {
    myForm: FormGroup;
    prijava: Prijava;
    constructor(private prijavaService: PrijavaService, private praksaParent: PraksaComponent) { }


    onSubmit() {

        const prijavaa = new Prijava(
            this.myForm.value.ime,
            this.myForm.value.prezime,
            this.myForm.value.mejl,
            this.myForm.value.linkCV,
            this.myForm.value.linkedin,
            this.myForm.value.portfolio,
            this.myForm.value.telefon,
            this.myForm.value.poruka,
            this.praksaParent.praksa.praksaid,
            this.praksaParent.praksa.naziv
        );
        this.prijavaService.addPrijava(prijavaa)
            .subscribe(
            data => console.log(data),
            error => console.log(error)
            );
        this.prijava = null;

        this.myForm.reset();
    }
    onClear() {
        this.prijava = null;
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            ime: new FormControl(null, Validators.required),
            prezime: new FormControl(null, Validators.required),
            mejl: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            linkCV: new FormControl(null, Validators.required),

            linkedin: new FormControl(null),
            portfolio: new FormControl(null),
            telefon: new FormControl(null),
            poruka: new FormControl(null)

        });
        /* this.prijavaService.prijavaIsEdit.subscribe(
            (prijava:Prijava)=>this.prijava = prijava
        ); ovo je za editovanje, a meni to ne treba */
    }
}