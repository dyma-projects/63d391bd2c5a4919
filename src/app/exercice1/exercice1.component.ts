import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.sass']
})
export class Exercice1Component {
  counter: number = 0;
  colorText: string = 'Bonjour !';

  increment() {
    this.counter++;
  }
}
