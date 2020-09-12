
class Page404Controllers {

    // [GET] /comments
    index(req, res) {
        res.render('page404');
    }
}

module.exports = new Page404Controllers;
