var pengguna = require('../controllers/pengguna');
 
module.exports = {
  configure: function(app) {
    app.get('/', function(req, res){
        res.send('home page');
    });
    // app.route('/pengguna').post(pengguna.create);
    app.route('/pengguna').get(pengguna.get);
    app.route('/pengguna/:id').get(pengguna.select);
    app.route('/pengguna/:id').put(pengguna.update);
    // app.route('/pengguna').delete(pengguna.delete);
    
    // handle get not found
    app.get('*', function(req, res){
        res.send('Sorry, this is an invalid URL.');
    });
    // handle other request not found
    app.use(function(req, res, next) {
        if (!req.route)
            res.send('request not found');  
    });
  }
};
