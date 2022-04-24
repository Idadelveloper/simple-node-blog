const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        { title: "Getting started in open source", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Stept to becoming a Full Stack Developer", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "My UNICEF internship experience", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ]

    res.render('index', { title: "Home" });
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create Blog" });
})

app.use((req, res) => {
    res.status(404).render('404', { title: "Not Found" });
})