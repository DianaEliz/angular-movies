import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTrendingMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:4200/assets/data/trending-movies.json').pipe(retry(1), catchError(this.handleError));
  }

  getTheatreMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:4200/assets/data/theatre-movies.json').pipe(retry(1), catchError(this.handleError));
  }

  getPopularMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:4200/assets/data/popular-movies.json').pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
