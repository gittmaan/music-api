async function fetchArtist(fastify, request) {
  const { spotifyService } = fastify;
  const { id } = request.params;

  const artist = await spotifyService.getArtist(id);

  return artist;
}

async function fetchAllArtists(fastify) {
  const { spotifyService } = fastify;

  const artists = await spotifyService.getAllArtists();

  return artists;
}

module.exports = { fetchArtist, fetchAllArtists };
