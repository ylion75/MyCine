import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FilmService } from './@shared/services/film.service';


const routes: Routes = [
    {
        path: '', component:AppComponent
    },
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddOrEditFilmComponent,
    FilmListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
