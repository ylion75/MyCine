import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from '../@shared/models/film';
import { FilmService } from '../@shared/services/film.service';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent implements OnInit {
  filmForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    synopsis: new FormControl('', []),
    rating: new FormControl<number | null >(null, [Validators.min(0), Validators.max(5)]),
  })
 
  @Output() onSave: EventEmitter<Film> = new EventEmitter<Film>();
  @Input() filmToEdit!: Film;
  //rajouter l'input avec le film à éditer

  /*
  film!:Film;
  editFilm($event: any){
    this.film = $event;
  }
  */
 printFilm(){
   console.log(this.filmToEdit);
 }

  constructor(public filmService: FilmService, private router: Router) 
  { }

  ngOnInit(): void {
  }

  save() {
    this.onSave.emit({
      title: this.filmForm.controls.title.value as string,
      synopsys: this.filmForm.controls.synopsis.value,
      rating: this.filmForm.controls.rating.value
    });
    
  }
  
}
