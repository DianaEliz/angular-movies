import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: Movie[] = [];
  theatreMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getPopularMovies().subscribe((movies: Movie[]) => this.popularMovies = movies);
    this.movieService.getTheatreMovies().subscribe((movies: Movie[]) => this.theatreMovies = movies);
    this.movieService.getTrendingMovies().subscribe((movies: Movie[]) => this.trendingMovies = movies);
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
