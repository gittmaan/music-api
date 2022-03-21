const fp = require('fastify-plugin');

const ArtistModel = require('./models/ArtistModel');
const TrackModel = require('./models/TrackModel');
const SpotifyService = require('./services/SpotifyService');

module.exports = fp(async function (fastify) {
  fastify.decorate('ArtistModel', ArtistModel);
  fastify.decorate('TrackModel', TrackModel);
  fastify.decorate('spotifyService', new SpotifyService(fastify.ArtistModel, fastify.TrackModel));
});
