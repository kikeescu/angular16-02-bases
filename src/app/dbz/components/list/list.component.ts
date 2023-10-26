import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 5500
  }]

  @Output()
  public deleteCharacterEvent: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id?: string): void {

    if ( !id ) return;
    //console.log(id);

    this.deleteCharacterEvent.emit(id);
  }

}
