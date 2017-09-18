import { PraksaListComponent } from './praksa/praksa-list.component';
import { PraksasComponent } from './praksa/praksas.component';
import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/praksa', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'praksa', component: PraksaListComponent },    
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);