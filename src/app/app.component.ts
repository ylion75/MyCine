import { Component } from '@angular/core';
import { Film } from './@shared/models/film';
import { FilmService } from './@shared/services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCine';

  films: Film[] = [];
  /*
  films: Film[] = [
    {title:'Titanic', synopsys: 'Un bateau qui coule', rating: 3},
    {title:'Titanic2', synopsys: 'Un bateau qui coule2', rating: 3},
  ]
  */

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadFilms;
  }

  filmList = this.films;
  
  loadFilms() {
    return this.filmService.getFilms().subscribe((res => console.log(res)));
    }

    /*
    return this.filmService.getFilms().subscribe((data: {}) => {
    this.films = data;
    })
    */
  

  addOrEditFilm(film:Film) {
    this.films.push(film);
  }

  film!:Film;
  editFilm($event: any){
    this.film = $event;
  }

  filmToEdit = this.film;


}

