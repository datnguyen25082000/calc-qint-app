const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars') // trả về format html (dùng để return res express)
const path = require('path'); // thư viện đường dẫn
const route = require('./routes/index');

// can access public content by url
app.use(express.static(path.join(__dirname, 'public')));

// encode các req từ post method(urlencoded) và thư viện truy vấn như axios, fetch,...(json) - k cần dùng body.parse 
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// template engine 
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


// run app route
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
