const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars') // trả về format html (dùng để return res express)
const path = require('path'); // thư viện đường dẫn


// can access public content by url
app.use(express.static(path.join(__dirname, 'public')));

// template engine 
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));






// execute exe file
var exec = require('child_process').exec;

var result = '';

var child = exec('Project1.exe input.txt src/output.txt');

child.stdout.on('data', function(data) {
    result += data;
});

child.on('close', function() {
    console.log('done');
    console.log(result);
});


// run app route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/about-me', (req, res) => {
  res.render('aboutme');
})

app.get('/comments', (req, res) => {
  res.render('comments');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
