const axios = require('axios');

const { spotifyClientId, spotifyClientSecret, TOKEN } = require('../../../constants');

const getSpotifyAuthToken = async () => {
  const options = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString('base64')}`,
    },

    data: 'grant_type=client_credentials',
    method: 'POST',
  };

  const response = await axios(TOKEN, options);

  return response?.data?.access_token;
};

module.exports = { getSpotifyAuthToken };
