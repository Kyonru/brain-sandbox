import { Movie } from '@types';
import MoviesApi from 'api/MoviesApi';

const moviesApi = new MoviesApi();

describe('Movies API', () => {
  it('should create a new movie', () => {
    const movieData: Movie = {
      name: 'Pirates of the caribbean',
      rating: 8.5,
    };

    const movie: Movie = moviesApi.create(movieData);

    expect(movie).toEqual(movieData);
  });
});
