const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const secrets = require('./secrets');
const Blog = require('./models/blog')

// express app
const app = express();

// connect to mongodb
const dbURI = `mongodb+srv://${secrets.username}:${secrets.password}@nodeblogapp.xeshj.mongodb.net/node-blog-app?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// app routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: "All Blogs", blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create Blog" });
})

app.use((req, res) => {
    res.status(404).render('404', { title: "Not Found" });
})