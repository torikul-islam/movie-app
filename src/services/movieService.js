import http from './httpService';
import { apiEndpoint } from '../config.json';

export function getMovies() {
    return http.get(apiEndpoint + "movies/");
}

export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + "/" + movieId)
}