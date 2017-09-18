import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
/* <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['kompanije']">Kompanije</a></li> */
@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['prakse']">Oglasi</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['prijave']">Prijave</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['signup']">Kreiraj novog korisnika</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Prijavi se</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Odjavi se</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
           <router-outlet></router-outlet>
        </div>
    `,
    styles:[`
        a{
            color:#ff7800;
        }
    `]
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) { }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}