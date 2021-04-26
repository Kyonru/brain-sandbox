import { Movie, IResource } from '@types';

export default class MoviesApi implements IResource<Movie> {
  movies: Movie[] = [];

  constructor() {
    // setup some dummy data
    this.movies.push({
      name: 'Pirates of the caribbean',
      rating: 8.5,
    });
    this.movies.push({
      name: 'Star Wars: A new hope',
      rating: 8.7,
    });
  }

  create(data: Movie): Movie {
    this.movies.push(data);
    return data;
  }

  findMany(): Movie[] {
    return this.movies;
  }
}
