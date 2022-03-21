const { Model } = require('objection');

class ArtistModel extends Model {
  static get tableName() {
    return 'artists';
  }
}

module.exports = ArtistModel;
