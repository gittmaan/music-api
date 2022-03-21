async function send(method, endpoint, data) {
  const opts = {
    method,
    headers: {},
  };

  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  return fetch(endpoint, opts);
}

function getArtist(artistId) {
  const found = this.spotify.filter((t) => t.id === artistId);

  if (!found || found.length < 1) {
    throw new Error('No Artist found');
  }

  return found[0];
}

async function fetchAllArtists() {
  const response = await send('GET', 'api/v1/artists');
  const data = await response.json();

  this.artists = data;
}

function spotify() {
  return {
    artists: [],
    fetchAllArtists,
    getArtist,
    newArtist: '',
    visibility: 'all',
  };
}

window.spotify = spotify;
