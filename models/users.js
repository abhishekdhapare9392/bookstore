var mongoose = require('mongoose');

//book schema

var userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('User', userSchema);

//Get User

module.exports.getUser = function(callback, limit) {
    User.find(callback).limit(limit);
};


//add user
module.exports.addUser = function(user, callback) {
    User.create(user, callback);
};