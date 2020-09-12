const homeRouter = require('./home');
const commentsRouter = require('./comments');
const page404Router = require('./page404');
const calcRouter = require('./calc');


function route(app) {
    app.use('/comments', commentsRouter);
    app.use('/404', page404Router); 
    app.use('/calc', calcRouter); 
    app.use('/', homeRouter); // đưa xuống dưới (mặc định khác trên là vào cái này)
}

module.exports = route;