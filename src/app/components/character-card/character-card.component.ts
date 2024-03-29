import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from 'src/app/interfaces/RickApiInterfaces';
@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  @Input() listCharacters?: Result;
  @Input() clickedCharacter: boolean = false;
  @Output() selectedCharacter = new EventEmitter<number>();
}
