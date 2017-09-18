import { PotkategorijaService } from './../potkategorije/potkategorija.service';
import { Potkategorija } from './../potkategorije/potkategorija.model';
import { KategorijaService } from './../kategorije/kategorija.service';
import { Kategorija } from './../kategorije/kategorija.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Praksa } from './praksa.model';
import { PraksaService } from './praksa.service';
import { Component, OnInit, OnChanges } from '@angular/core';


@Component({
    selector: 'app-praksa-input',
    templateUrl: './praksa-input.component.html',
    styles: [`
        .klasa{
            text-transform: uppercase;
        }
        .checkbox{
            width:20px;
            height:20px;
            
        }
        .labela{
            font-size:12px;
        }
        .levo{
            float: left; width:45%;
        }
        .desno{
            float: right; width:45%;
        }
        .levo label{
            display: block;
        }
        .desno label{
            display: block;
        }
        .tagovi{
            float: left; width:100%;
        }
        .tagovi label{
            display: block;
        }
        .potkategorija{
            float:left; width:15%;
        }
        textarea{
            resize: none;
        }
    `]
})
export class PraksaInputComponent implements OnInit {
    myForm: FormGroup;
    praksa: Praksa;
    kategorijas: Kategorija[];
    potkategorijas: Potkategorija[];
    checkboxes= [];

    constructor(private kategorijaService: KategorijaService, private potkategorijaService: PotkategorijaService, private praksaService: PraksaService) { }


    onSubmit() {
        //console.log(form);
        var stringTagovi: string [] = [];
        if(this.myForm.value.tagovi!=null){
            stringTagovi = this.myForm.value.tagovi.split(", ");
        }
        for(let check of this.selectedCheckboxes){
            stringTagovi.push(check)
        }
        if (this.praksa) {
            //edit
            var tagovi: string [] = [];
            for(let check of this.selectedCheckboxes){
                tagovi.push(check)
            }
            this.praksa.naziv = this.myForm.value.naziv;
            this.praksa.kompanija = this.myForm.value.kompanija;
            this.praksa.opis = this.myForm.value.opis;
            this.praksa.pozicija = this.myForm.value.pozicija;
            this.praksa.kategorija = this.myForm.value.kategorija;
            this.praksa.tagovi = tagovi;

            this.praksaService.updatePraksa(this.praksa)
                .subscribe(
                data => console.log(data),
                error => console.log(error)
                );
            this.praksa = null;
        } else {
            //create
            /* var stringTagovi: string [] = this.myForm.value.tagovi.split(", ");
            for(let check of this.selectedCheckboxes){
                stringTagovi.push(check)
            } */
            const praksa = new Praksa(
                this.myForm.value.naziv,
                this.myForm.value.kompanija,
                this.myForm.value.opis,
                this.myForm.value.pozicija,
                this.myForm.value.kategorija,
                stringTagovi

            );
            this.praksaService.addPraksa(praksa)
                .subscribe(
                data => console.log(data),
                error => console.log(error)
                );
        }

        this.myForm.reset();
    }
    onClear() {
        this.praksa = null;
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            naziv: new FormControl(null, Validators.required),
            kompanija: new FormControl(null, Validators.required),
            pozicija: new FormControl(null, Validators.required),
            kategorija: new FormControl(null, Validators.required),
            tagovi: new FormControl(null),
            checkboxes: new FormControl(null),
            opis: new FormControl(null, Validators.required)
        });
        this.praksaService.praksaIsEdit
            .subscribe(
            (praksa: Praksa) => this.praksa = praksa
            );
        this.kategorijaService.getKategorije()
            .subscribe(
            (kategorijas: Kategorija[]) => {
                this.kategorijas = kategorijas;
            }
            );
        this.potkategorijaService.getPotkategorije()
            .subscribe(
            (potkategorijas: Potkategorija[]) => {
                this.potkategorijas = potkategorijas;
                for(let potkategorija of potkategorijas){
                    this.checkboxes.push({value: potkategorija.naziv, checked:false});
                }
                console.log(this.checkboxes);
            }
            );
    }
    jeTehnologija(){
        if(this.myForm.value.kategorija=="tehnologija"){
            return true;
        }
        return false;
    }
    get selectedCheckboxes(){
        return this.checkboxes.filter(opt=> opt.checked).map(opt=>opt.value)
    }

    
}