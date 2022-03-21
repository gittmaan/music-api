function register(fastify) {
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'music-api',
        description: 'API documentation for Music API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [],
    },
    exposeRoute: true,
  });
}

module.exports = register;
