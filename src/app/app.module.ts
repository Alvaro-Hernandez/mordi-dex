import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageCharacterComponent } from './components/image-character/image-character.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageCharacterComponent,
    CharacterCardComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
