const { Model } = require('objection');

class TrackModel extends Model {
  static get tableName() {
    return 'tracks';
  }

  static idColumn = 'isrc';
}

module.exports = TrackModel;
