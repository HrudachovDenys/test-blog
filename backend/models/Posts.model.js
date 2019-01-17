const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.get("mongoose:uri"), (err) => {
    if(err) throw err;
});

const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Schema.Types.ObjectId,

    user: String,
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        unique: true,
        required: true
    },
    text: {
        type: String,
        unique: true,
        required: true
    },
    publication_date: Date
});

module.exports = mongoose.model("Post", schema);