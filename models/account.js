/**
 * Created by jamie on 2016-11-02.
 */
var mongoose = require('mongoose');

var plm = require('passport-local-mongoose');

var AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username is required'
    },
    password: {
        type: String
    }
});

// connect this model to to passport locla mongoose
AccountSchema.plugin(plm);

// make this public
module.exports = mongoose.model('Account', AccountSchema);