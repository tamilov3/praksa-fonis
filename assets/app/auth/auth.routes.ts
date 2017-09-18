import { PrijavaListComponent } from './../prijave/prijava-list.component';
import { PraksasComponent } from './../praksa/praksas.component';
import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'prakse', component: PraksasComponent },
  //  { path: 'kompanije', component: SigninComponent },
   { path: 'prijave', component: PrijavaListComponent }
    
];