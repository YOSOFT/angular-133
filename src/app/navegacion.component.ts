import {Component} from '@angular/core'

@Component({
    selector: 'app-navegacion',
    template: '<h2> {{menu}} Barra de navegacion</h2>'
})
export class NavegacionComponent {
    menu = "Esta es una propiedad enlazada;"
}