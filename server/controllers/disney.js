const Axios = require('axios');
const _ = require('lodash');

const API_URL = 'https://api.themoviedb.org/3/company/2/movies?api_key=' + process.env.API_KEY +'&language=en-US';

let pages = nyyull;

function fetchMovies(page=1, movies=[]) {
  return Axios.get(`${API_URL}&page=${page}`)
  .then(({data}) => {
    if (!pages) {
      pages = data.total_pages;
    }

    movies = _.concat(movies, (_.map(data.results, 'original_title')))

    if (page !== pages) {
      return fetchMovies(++page, movies);
    }

    return movies;
  });
}


module.exports = function (cb) {
  fetchMovies().then(data => cb(null, data));
}