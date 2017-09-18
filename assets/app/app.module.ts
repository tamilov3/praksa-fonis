import { PraksaListPipe } from './praksa/praksa-list.pipe';
import { PotkategorijaService } from './potkategorije/potkategorija.service';
import { KategorijaService } from './kategorije/kategorija.service';

import { PrijavaService } from './prijave/prijava.service';
import { PrijavaListComponent } from './prijave/prijava-list.component';
import { PrijavaComponent } from './prijave/prijava.component';
import { PrijavaInputComponent } from './prijave/prijava-input.component';
import { PraksasComponent } from './praksa/praksas.component';
import { PraksaInputComponent } from './praksa/praksa-input.component';
import { PraksaListComponent } from './praksa/praksa-list.component';
import { PraksaComponent } from './praksa/praksa.component';
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

import { AppComponent } from "./app.component";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { routing } from "./app.routing";


@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        PraksaComponent,
        PraksaListComponent,
        PraksaInputComponent,
        PraksasComponent,
        PrijavaInputComponent,
        PrijavaComponent,
        PrijavaListComponent,
        PraksaListPipe

    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [AuthService, ErrorService, KategorijaService, PotkategorijaService],
    bootstrap: [AppComponent]
})
export class AppModule {

}