import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';
import { Heroes } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of (Heroes);
  }

 /* getHero(id: any): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (Heroes.findIndex((hero => hero.id === id));
  } */
}
