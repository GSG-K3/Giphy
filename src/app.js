const gif = require('./controller/gif.js')
const errors = require('./controller/errors.js')

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression')
const app = express();


const request = require('request');


app.disable('x-powered-by')
app.set('port',3333)

app.use(compression())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'..', 'public')));


app.get('/gif', gif.getGif)

app.post('/gif/:name', gif.postGif)

app.use('*', errors.pageNotFound)
app.use(errors.serverError)





app.listen(app.get('port'), ()=> {
  console.log('app is running', app.get('port'))
})


