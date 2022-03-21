async function fetchTrack(fastify, request) {
  const { spotifyService } = fastify;
  const { isrc } = request.params;

  const track = await spotifyService.getTrack(isrc);

  return track;
}

module.exports = fetchTrack;
