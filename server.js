// Require our modules and declare our settings variables 
const express = require('express');
const port = 3000;
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');
const morgan = require('morgan');
const methodOverride = require('method-override')
// Create the express app
const app = express();
// Configure server settings with app.set()
app.set('view engine', 'ejs');
// mount our middleware with app.use()

// mount our routes 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.get('/', function(req, res){
    res.render('index');
})
// app.get('/skills/:id', function(req, res){
//     res.render('show');
// })
// all routes pertaining to/skills 
app.use('/', indexRouter);
app.use('/skills', skillsRouter);
// tell the app to listen 


app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`);
})