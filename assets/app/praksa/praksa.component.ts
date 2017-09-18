import { PrijavaService } from './../prijave/prijava.service';
import { PraksaService } from './praksa.service';
import { AuthService } from './../auth/auth.service';
import { Praksa } from './praksa.model';
import { Input, Injectable } from '@angular/core';
import { Component } from '@angular/core';
@Injectable()
@Component({
    selector:'app-praksa',
    templateUrl: './praksa.component.html',
    styles:[`
    .author {
        display: inline-block;
        font-style: italic;
        margin-top:0;
        margin-bottom:0;        
        font-size: 20px;
        width: 80%;
    }
    .config {
        padding-top:6px;
        display: inline-block;
        text-align: right;
        float: right;
        font-size: 18px;
        height: 100%;
    }
    .config a{
        font-style: italic;
        font-size: 15px;
    }
    #edit{
        color:#F0AD4E;
    }
    #delete{
        color: #D9534F;
    }
    `]
})
export class PraksaComponent{
    @Input() praksa: Praksa;
    
    prijavioSe=false;
    constructor(private authService: AuthService, private praksaService: PraksaService) { }
    
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onEdit(){
        this.praksaService.editPraksa(this.praksa);
    }
    onDelete(){
        this.praksaService.deletePraksa(this.praksa)
        .subscribe(
            result => console.log(result)
        );
    }
}