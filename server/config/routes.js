var path = require ('path');
var users = require('../controllers/users.js');
var buckets = require('../controllers/buckets.js');

module.exports = function (app) {
    app.get('/users/index', users.index);
    app.post('/users/create', users.create);
    app.get('/users/:id', users.show);
    
    app.get('/buckets/index', buckets.index );
    app.post('/buckets/create', buckets.create);
    app.put('/buckets/:id', buckets.update);

    app.all('*', function(req, res){
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
}

