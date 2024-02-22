import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from 'src/app/interfaces/RickApiInterfaces';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent {
  @Input() listCharacters?: Result;
  @Input() openDetail: boolean = false;
  @Output() closeDetail = new EventEmitter();

  speciesColors: { [key: string]: string } = {
    Human: '#FFD700',
    Alien: '#7FFF00',
    Cronenberg: '#A52A2A',
    IntelligentDogs: '#808080',
    EvilMorty: '#FF4500',
    FurniturePeople: '#8B4513',
    GearHead: '#4682B4',
    ButtWorldResidents: '#DAA520',
    HepatitisC: '#FF6347',
    MrMeeseeks: '#00FFFF',
    Gazorpazorpian: '#6A5ACD',
    ScaryTerry: '#800080',
    Birdperson: '#FF69B4',
    default: '#D3D3D3',
  };

  getSpeciesColor(species: string): string {
    return this.speciesColors[species] || this.speciesColors['default'];
  }
}
