const express = require('express');
const router = express.Router();
const Utilities = require('../utilities');
const WrapperUtility = Utilities.WrapperUtility;
const wrap = WrapperUtility.handle;
const { ApiController } = require("../controllers");

router.post('/addpost', wrap(ApiController.addPostAction)); 
router.post('/getposts', wrap(ApiController.getAllPostsAction)); 
router.post('/getpost/:id', wrap(ApiController.getPostByIdAction));
router.post('/addcomment', wrap(ApiController.addCommentAction));
router.post('/getcomments/:postid', wrap(ApiController.getCommentsAction));

module.exports = router;