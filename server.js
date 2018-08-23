const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentYear', ()=>{

    return new Date().getFullYear();
})
app.get('/',(request, response)=>{

    response.render('home.hbs',{
        pageTitle:'Home Page',
        welcomeMessage: 'Welcome to our website'
    });
});

app.get('/about',(request, response)=>{
    response.render('about.hbs',{
        pageTitle:'About Page'
    });
});
app.listen(3000);