import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public newCharacterEvent: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitNewCharacter(): void{

    //console.log('Desde Add-character: ', this.character);

    if(this.character.name.length === 0){
      return;
    }

    this.newCharacterEvent.emit(this.character);

    //limpiamos el formulario
    this.character = {name: '', power: 0 };

  }

}
