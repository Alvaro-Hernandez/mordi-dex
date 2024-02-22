import { Component, Input } from '@angular/core';
import { Result } from 'src/app/interfaces/RickApiInterfaces';

@Component({
  selector: 'app-image-character',
  templateUrl: './image-character.component.html',
  styleUrls: ['./image-character.component.css'],
})
export class ImageCharacterComponent {
  @Input() clickedCharacter?: Result;
}
