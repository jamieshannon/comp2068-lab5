/**
 * Created by jamie on 2016-10-05.
 */
//link to mongoose
var mongoose = require('mongoose');

//create a team schema
var teamSchema = new mongoose.Schema({
    city: {
        type: String,
        required: 'City cannot be blank'
    },
    nickname: {
        type: String,
        required: "Nickname cannot be blank"
    },
    wins: {
        type: Number
    },
    losses: {
        type: Number
    }
});

//make the schema public using the schema defined above
//note the public class name is singular and starts with a Capital
module.exports = mongoose.model('Team', teamSchema);