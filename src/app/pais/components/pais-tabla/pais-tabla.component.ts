import { Country } from './../../interfaces/pais.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input() paises: Country[] = [];

  constructor() { }

}
