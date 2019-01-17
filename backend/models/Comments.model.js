const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.get("mongoose:uri"), (err) => {
    if(err) throw err;
});

const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Schema.Types.ObjectId,

    user: String,
    comment: String,
    post_id: {
        type: Schema.Types.ObjectId, 
        ref: 'posts',
        auto: true
    },
    date: Date
});

module.exports = mongoose.model("Comment", schema);