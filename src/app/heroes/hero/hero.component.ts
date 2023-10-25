import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 35;

  get capitalizaName(){
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name} - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 45;
  }

  resetForm(): void {
    //this.name = 'ironman';
    this.age = 35;
    document.querySelectorAll('h1')!.forEach( element => {  // este código no está dentro
      element.innerHTML = '<h1>Desde angular</h1>';         // del ciclo de deteccion
    });                                                     // de cambios de Angular
  }

}
