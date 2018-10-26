import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  template:`
  <h2>Movie-details</h2>
  <ul *ngFor = "let movie of movies">
    <li>{{movie.id}}{{movie.name}}{{movie.age}}</li>
  </ul>
  `,
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movies = [ ]
  
  constructor(private _movieService:MovieService) { }
  
  ngOnInit() {
    this._movieService.getMovies()
       .subscribe(data => this.movies = data);
 }

}
