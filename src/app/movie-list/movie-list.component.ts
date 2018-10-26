import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
@Component({
  selector: 'app-movie-list',
  template: `<h2>movie-List</h2>
    <ul *ngFor = "let movie of movies">
      <li>{{movie.id}}-{{movie.name}}-{{movie.rating}}</li>  
    </ul>
  `,
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies = [ ]

  constructor(private _movieService:MovieService) { }

  ngOnInit() {
     this._movieService.getMovies()
        .subscribe(data => this.movies = data);
  }
}
