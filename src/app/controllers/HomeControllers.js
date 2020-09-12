
class HomeControllers {

    // [GET] /
    index(req, res) {
        res.render('home');
    }

    calc(req, res) {
        res.send("hello world");
    }
}

module.exports = new HomeControllers;