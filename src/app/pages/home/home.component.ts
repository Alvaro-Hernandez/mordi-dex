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
  charging: boolean = false;

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
      console.table(this.listCharacters);
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
}
