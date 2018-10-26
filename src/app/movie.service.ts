import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  searchOption = [];
  public postData: IMovie[]
  private _url:string = "assets/data/movies.json";

  constructor(private http: HttpClient) { }

  getMovies():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this._url);
  }
}
