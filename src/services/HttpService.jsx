const axios = require('axios');
const userFeed = require('./user-feed.json');

const URL = 'https://tiktok33.p.rapidapi.com';
const HOST = 'tiktok33.p.rapidapi.com';
const API_KEY = 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66';

const http = axios.create({
  baseURL: URL,
});

http.interceptors.request.use(
  function (config) {
    config.headers['x-rapidapi-host'] = HOST;
    config.headers['x-rapidapi-key'] = API_KEY;
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export const getTrendingFeed = async (limit) => {
  return http.get(`/trending/feed?limit=${limit}`);
};

export const getUserFeed = async (username, offset, limit) => {
  return userFeed.itemList.splice(offset, offset + limit);
};

export const getUserInfo = async (username) => {
  return http.get(`/user/info/${username}`);
};
