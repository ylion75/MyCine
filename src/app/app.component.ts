import { Component } from '@angular/core';
import { Film } from './@shared/models/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCine';
  films: Film[] = [
    {title:'Titanic', synopsys: 'Un bateau qui coule', rating: 3},
    {title:'Titanic2', synopsys: 'Un bateau qui coule2', rating: 3},
  ]

  parentFilms = this.films;
  //  parentMessage = "Hello from app component";

  
  addOrEditFilm(film:Film) {
    this.films.push(film);

  }



}

