import { Injectable } from '@angular/core';
import { Result } from '../interfaces/RickApiInterfaces';

@Injectable({
  providedIn: 'root',
})
export class ApimortyService {
  constructor() {}

  async getByCharactersPage(page: number = 1): Promise<Result[]> {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const result = await res.json();
    return result.results ?? [];
  }

  async getById(id: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const result = await res.json();
    console.log(result);
  }
}
