import { Component } from '@angular/core';

@Component({
    selector:'app-praksas',
    template:`
        <div class="row">
            <app-praksa-input></app-praksa-input>
        </div>
        <hr>
        <div class="row">
            <app-praksa-list></app-praksa-list>
        </div>
    `
})
export class PraksasComponent{

}