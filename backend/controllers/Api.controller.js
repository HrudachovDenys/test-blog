const mongoose = require('mongoose');
const config = require('../config');

const { PostsModel, CommentsModel } = require('../models');

class ApiController {

    static async addPostAction(req, res, next) {

        const data = req.body;
        data._id = new mongoose.Types.ObjectId();
        data.publication_date = Date.now();
        const post = new PostsModel(data);

        post.save(err => {
            if(err) res.status(406).send('Error');
            else res.status(200).send('Post added');
        })
    }

    static async getAllPostsAction(req, res, next) {
        PostsModel.find().sort({publication_date: -1}).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(406).send(err);
        })
    }

    static async getPostByIdAction(req, res, next) {
        PostsModel.findOne({_id: req.params.id}).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(406).send(err);
        })
    }

    static async addCommentAction(req, res, next) {
        const data = req.body;
        data._id = new mongoose.Types.ObjectId();
        data.date = Date.now();
        const comment = new CommentsModel(data);

        comment.save(err => {
            if(err) res.status(406).send('Error');
            else res.status(200).send('Comment added');
            
        })
    }

    static async getCommentsAction(req, res, next) {
        CommentsModel.find({'post_id': req.params.postid}).sort({date: -1}).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(406).send(err);
        })
    }
}

module.exports = ApiController;