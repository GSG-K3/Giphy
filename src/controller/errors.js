
const path = require('path');


const pageNotFound = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

const serverError = (error, req, res, next)=> {
    res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
}


module.exports = {pageNotFound, serverError}