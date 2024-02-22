import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Result } from 'src/app/interfaces/RickApiInterfaces';
import { ApimortyService } from 'src/app/services/apimorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apimortyService: ApimortyService) {}

  listCharacters: Result[] = [];
  currentPage = 1;
  clickedCharacter?: Result;
  charging: boolean = false;
  detail: boolean = false;

  ngOnInit(): void {
    this.loadMoreCharacters();
  }

  async loadMoreCharacters() {
    if (this.charging) return;

    this.charging = true;

    setTimeout(async () => {
      const newCharacters = await this.apimortyService.getByCharactersPage(
        this.currentPage
      );
      this.listCharacters = [...this.listCharacters, ...newCharacters];
      this.currentPage++;
      this.charging = false;
    }, 1000);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.charging) {
      return;
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.loadMoreCharacters();
    }
  }

  async selectedCharacter(character: number) {
    if (this.clickedCharacter?.id === character) {
      this.changeCardDetail();
      return;
    }
    this.clickedCharacter = await this.apimortyService.getById(character);
  }

  changeCardDetail() {
    if (this.clickedCharacter) this.detail = !this.detail;
  }
}
