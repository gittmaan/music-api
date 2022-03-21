const R = require('ramda');
const { fetchArtist, fetchAllArtists } = require('./controllers/artist');
const getTrackByISRC = require('./controllers/track');
const listController = require('./controllers/listController');

const list = (fastify) => ({
  method: 'GET',
  url: '/spotify',
  schema: { tags: ['X-HIDDEN'] },
  handler: R.partial(listController, [fastify]),
});

const getArtist = (fastify) => ({
  method: 'GET',
  url: '/api/v1/artists/:id',
  schema: {
    description: 'Fetch Artist',

    params: {
      type: 'object',
      description: 'Artist ID',
      properties: {
        id: { type: 'string' },
      },
    },
  },
  handler: async (request, reply) => await fetchArtist(fastify, request, reply),
});

const getTrack = (fastify) => ({
  method: 'GET',
  url: '/api/v1/tracks/:isrc',
  schema: {
    description: 'Fetch Track',

    params: {
      type: 'object',
      description: 'Track ID',
      properties: {
        isrc: { type: 'string' },
      },
    },
  },
  handler: async (request, reply) => await getTrackByISRC(fastify, request, reply),
});

const getAllArtists = (fastify) => ({
  method: 'GET',
  url: '/api/v1/artists',
  handler: async (request, reply) => await fetchAllArtists(fastify, request, reply),
});

module.exports = [getArtist, getTrack, list, getAllArtists];
