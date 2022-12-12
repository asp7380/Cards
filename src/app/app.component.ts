import { Component, OnInit } from '@angular/core';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cards';

  constructor(private cardService: CardsService) {

  }
  ngOnInit(): void {
   this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAllCards()
    .subscribe(
      response => {
        console.log(response);
      }
    )
  }
}
