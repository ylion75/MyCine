import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../@shared/models/film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() filmsToDisplay!: Film[];

  constructor() { }

  ngOnInit(): void {
  }

}
