import { PrijavaService } from './prijave/prijava.service';
import { PraksaService } from './praksa/praksa.service';
import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, PraksaService, PrijavaService],
    styles:[`
        .jumbotron{
            background: url('https://vortechsgroup.com/wp-content/uploads/2015/10/IMG_3921-1260.jpg') no-repeat;
            background-color: #17234E;
            background-size: cover;
            background-position: 30% 15%; 
            height:300px;
        }
    `]
})
export class AppComponent {
}