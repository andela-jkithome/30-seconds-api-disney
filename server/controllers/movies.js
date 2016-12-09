const Axios = require('axios');
const _ = require('lodash');

const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.API_KEY +'&language=en-US';

let pages = 25;

function fetchMovies(page=1, movies=[]) {
  return Axios.get(`${API_URL}&page=${page}`)
  .then(({data}) => {
    movies = _.concat(movies, (_.map(data.results, 'title')))

    if (page !== pages) {
      return fetchMovies(++page, movies);
    }

    return movies;
  });
}


module.exports = function (cb) {
  fetchMovies().then(data => cb(null, data));
}