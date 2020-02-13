const path = require('path');
const request = require('request')
const errors = require('./errors.js')

const arr = [];
let link = "" ;


const getGif = (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
}

const postGif = (requ,resp,next) => {

// console.log(req.body.name);
  const search = requ.params.name;
  console.log(search)

//   search = "dog";
// return search
const url = `http://api.giphy.com/v1/gifs/search?q=${search}&limit=4&api_key=KuE4a9CKQ46hlrVzfi5rIdB0XdS2BnYH`;
// res.send(url)
    arr.length = 0;


request.get(url , (err, res, body) => {
    if (err) {
                console.log(err)

        next(err)
    }
    const bodyy = JSON.parse(body);  
    // res.send(bodyy.data[0].embed_url)
    for (let i = 0; i < bodyy.data.length; i++) {
link = bodyy.data[i].images.fixed_height.url;
console.log(url);   
 arr.push(link)
console.log(link);

// resp.send(link);
    }
console.log(arr);

    resp.send(arr)


});


}

module.exports = {getGif , postGif};