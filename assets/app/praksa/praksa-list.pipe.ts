import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {name: 'tag', 
    pure: false
})
export class PraksaListPipe implements PipeTransform{

    transform(praksas: any[], filter: Object): any {
        if (!praksas || !filter) {
            return praksas;
        }
        if(filter=='SVI'){
            return praksas;
        }
        
        return praksas.filter(praksa => praksa.tagovi.indexOf(filter) !== -1);
    }
}