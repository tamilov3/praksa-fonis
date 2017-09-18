import { AuthService } from './../auth/auth.service';
import { PrijavaService } from './prijava.service';
import { Prijava } from './prijava.model';
import { Component,Input } from '@angular/core';
@Component({
    selector:'app-prijava',
    templateUrl:'./prijava.component.html',
    styles:[`
        .praksaNaziv{
            font-style: italic;
            font-size: 20px;
            margin-top:0;
        }
        #delete{
            color: #D9534F;
            font-style:italic;
            
        }
    `]
})
export class PrijavaComponent{
    @Input() prijava: Prijava;

    constructor(private prijavaService: PrijavaService, private authService: AuthService ){}

    onDelete(prijava: Prijava){
        this.prijavaService.deletePrijava(this.prijava)
        .subscribe(
            result => console.log(result)
        );
        
        
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}