import { MovieService } from './../movie.service';
import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public movies = [ ]
  constructor(private _movieService:MovieService) { }

  ngOnInit() {
    this._movieService.getMovies()
        .subscribe(data => this.movies = data);
  }

}
