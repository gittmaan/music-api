const { getArtist } = require('./artist');
const { getTrackByISRC } = require('./track');

class SpotifyService {
  constructor(artistModel, trackModel) {
    this.artistModel = artistModel;
    this.trackModel = trackModel;
  }

  async getAllArtists() {
    return this.artistModel.query();
  }

  async getArtist(artistId) {
    const artist = await getArtist(artistId);

    const dbreturn = await this.artistModel
      .query()
      .insert([
        {
          id: artist.id,
          name: artist.name,
          popularity: artist.popularity,
          uri: artist.uri,
          href: artist.href,
        },
      ])
      .onConflict('id')
      .ignore();

    return dbreturn;
  }

  async getTrack(isrc) {
    const track = await getTrackByISRC(isrc);
    if (track == null) {
      return { message: `Track with ISRC Code ${isrc} was not found.` };
    }
    const trackDbReturn = await this.trackModel
      .query()
      .insert([
        {
          isrc: track.isrc,
          image_url: track.image_url,
          title: track.title,
        },
      ])
      .onConflict('isrc')
      .ignore();

    track.artists.map(async (artist) => {
      const artistDbReturn = await this.artistModel
        .query()
        .insert([
          {
            id: artist.spotifyId,
            name: artist.name,
          },
        ])
        .onConflict('id')
        .ignore();
      console.log(
        '🚀 ~ file: SpotifyService.js ~ line 66 ~ SpotifyService ~ track.artists.map ~ artistDbReturn',
        artistDbReturn
      );
    });

    // return this.spotifyModel.query().findById(isrc);
    return track;
  }
}

module.exports = SpotifyService;
