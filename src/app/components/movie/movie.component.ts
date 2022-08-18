import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  type: string = '';
  id: string = '';
  movie: Movie = new Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === MovieTypeEnum.Trending) {
      this.movieService.getTrendingMovies().subscribe((movies: Movie[]) => this.getMovie(movies));
    } else if (this.type === MovieTypeEnum.Theatre) {
      this.movieService.getTheatreMovies().subscribe((movies: Movie[]) => this.getMovie(movies));
    } else {
      this.movieService.getPopularMovies().subscribe((movies: Movie[]) => this.getMovie(movies));
    }

  }

  getMovie(movies: Movie[]) {
    let index = movies.findIndex((movie) => movie.id == this.id);
    if (index > -1) {
      this.movie = movies[index];
    }
  }
}
