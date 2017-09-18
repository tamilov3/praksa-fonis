import { AuthService } from './auth/auth.service';
import { Praksa } from './praksa/praksa.model';

import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
        
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/praksa']">Oglasi</a></li>                    
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['/messages']">Poruke</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['/auth']">Admin Konzola</a></li>
                    
                </ul>
            </nav>
        </header>

    `,

    styles: [`
        a{
            color:#ff7800;
        }
        .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
            color:#fff;
            background-color: #ff7800;
        }
    `]
})

export class HeaderComponent {
    constructor(private authService: AuthService) { }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}