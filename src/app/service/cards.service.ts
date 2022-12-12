import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseurl = 'https://localhost:7153/api/cards';

  constructor(private http: HttpClient) { }

  //GetAllCards
  getAllCards(): Observable<Card[]> {
      console.log(`In the app component`);
      return this.http.get<Card[]>(this.baseurl);
  }
}
