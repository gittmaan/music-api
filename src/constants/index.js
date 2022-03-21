const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const ALBUM = 'https://api.spotify.com/v1/albums';
const ARTIST = 'https://api.spotify.com/v1/artists';
const AUTHORIZE = 'https://accounts.spotify.com/authorize';
const DEVICES = 'https://api.spotify.com/v1/me/player/devices';
const NEXT = 'https://api.spotify.com/v1/me/player/next';
const PAUSE = 'https://api.spotify.com/v1/me/player/pause';
const PLAY = 'https://api.spotify.com/v1/me/player/play';
const PLAYER = 'https://api.spotify.com/v1/me/player';
const SEARCH = 'https://api.spotify.com/v1/search';
const TOKEN = 'https://accounts.spotify.com/api/token';
const TRACK = 'https://api.spotify.com/v1/tracks';
const VOLUME = 'https://api.spotify.com/v1/me/player/volume';

module.exports = {
  ALBUM,
  ARTIST,
  AUTHORIZE,
  DEVICES,
  NEXT,
  PAUSE,
  PLAY,
  PLAYER,
  SEARCH,
  spotifyClientId,
  spotifyClientSecret,
  TOKEN,
  TRACK,
  VOLUME,
};
