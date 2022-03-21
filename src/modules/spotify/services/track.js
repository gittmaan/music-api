const axios = require('axios');

const { SEARCH } = require('../../../constants');

const { getSpotifyAuthToken } = require('../helper');

const getTrackByISRC = async (isrc) => {
  try {
    const token = await getSpotifyAuthToken();
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: {
        query: `isrc:${isrc}`,
        type: 'track',
        offset: 0,
        limit: 20,
      },
    };

    const { data } = await axios(SEARCH, options);

    if (!data?.tracks?.items.length) {
      return null;
    }

    const tracks = data?.tracks?.items;

    const popularTrack = tracks.reduce((max, track) => (track.popularity > max.popularity ? track : max), tracks[0]);

    const results = {
      isrc: popularTrack?.external_ids?.isrc,
      image_url: popularTrack?.album?.images?.[0]?.url,
      title: popularTrack?.name,
      artists: popularTrack?.artists?.map((artist) => ({
        spotifyId: artist.id,
        name: artist.name,
      })),
    };

    return results;
  } catch (error) {
    console.log('🚀 ~ file: artist.js ~ line 78 ~ getTrackByISRC ~ error', error.response?.data);
    return error.response?.data?.error;
  }
};

module.exports = { getTrackByISRC };
