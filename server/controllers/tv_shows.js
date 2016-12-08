const Axios = require('axios');
const _ = require('lodash');

const API_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=' + process.env.API_KEY +'&language=en-US';

let pages = null;

function fetchShows(page=1, tvShows=[]) {
  return Axios.get(`${API_URL}&page=${page}`)
  .then(({data}) => {
    if (!pages) {
      pages = data.total_pages;
    }

    tvShows = _.concat(tvShows, (_.map(data.results, 'name')))

    if (page !== pages) {
      return fetchShows(++page, tvShows);
    }

    return tvShows;
  });
}


module.exports = function (cb) {
  fetchShows().then(data => cb(null, data));
}