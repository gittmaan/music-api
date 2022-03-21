const fetchArtist = {
  description: 'Fetch Artist',
  tags: ['artist'],

  params: {
    type: 'string',
    description: 'Artist ID',
    properties: {
      id: { type: 'string' },
    },
  },

  response: {
    200: {
      type: 'object',
      properties: {
        content: {
          type: 'object',
          items: {},
        },
      },
    },
  },
};

module.exports = { fetchArtist };
