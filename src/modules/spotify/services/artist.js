const axios = require('axios');

const { ARTIST } = require('../../../constants');

const { getSpotifyAuthToken } = require('../helper');

const getArtist = async (artistId) => {
  try {
    const token = await getSpotifyAuthToken();
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios(`${ARTIST}/${artistId}`, options);
    console.log('🚀 ~ file: artist.js ~ line 19 ~ getArtist ~ data', data);

    return data;
  } catch (error) {
    console.log('🚀 ~ file: artist.js ~ line 51 ~ getArtist ~ error', error.response?.data);
    return error.response?.data?.error;
  }
};

module.exports = { getArtist };
