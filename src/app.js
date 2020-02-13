const gif = require('./controller/gif.js')
const errors = require('./controller/errors.js')

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression')
const app = express();

// let url = "" ;
// let search = "";
const request = require('request');

// const arr = [];
// let link = "" ;
app.disable('x-powered-by')
app.set('port',3333)

app.use(compression())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'..', 'public')));


app.get('/gif', gif.getGif)
// console.log(giphy.getGiphy)
app.post('/gif/:name', gif.postGif)

app.get('*', errors.pageNotFound)





app.listen(app.get('port'), ()=> {
  console.log('app is running', app.get('port'))
})


