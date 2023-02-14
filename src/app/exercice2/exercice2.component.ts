import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.sass']
})
export class Exercice2Component {
  @HostListener('window:click', ['$event']) onScrollEvent($event: any) {
    console.log('clic');
  }
}
