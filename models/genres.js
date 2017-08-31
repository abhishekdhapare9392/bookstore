var mongoose = require('mongoose');

//genre schema

var genreSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get Genres

module.exports.getGenres = function(callback, limit) {
    Genre.find(callback).limit(limit);
}

//Get Genre

module.exports.getGenreById = function(id, callback) {
    Book.findById(id, callback);
}