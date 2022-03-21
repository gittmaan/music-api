async function list(fastify, request, reply) {
  return reply.view('spotify/index.njk');
}

module.exports = list;
