import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Film } from '../@shared/models/film';
import { FilmService } from '../@shared/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() filmsToDisplay!: Film[];
  @Output() onClick: EventEmitter<Film> = new EventEmitter<Film>();
  //filmForm: FormControl = new FormControl();
  //filmToEdit!: FormGroup;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(res => console.warn(res));
  }

  remove(index: any) {
    this.filmsToDisplay.splice(index, 1);
  }

  editFilm(filmToEdit: Film) {
    this.onClick.emit(filmToEdit);
    console.log(filmToEdit);

  }
}
