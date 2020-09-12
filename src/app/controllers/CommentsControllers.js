
class CommentsControllers {

    // [GET] /comments
    index(req, res) {
        res.render('comments');
    }
}

module.exports = new CommentsControllers;