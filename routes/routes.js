var pengguna = require('../controllers/pengguna');
var anggotaPengguna = require('../controllers/anggotaPengguna');
 
module.exports = {
  configure: function(app) {
    app.get('/', function(req, res){
        res.send('home page');
    });
    // app.route('/pengguna').post(pengguna.create);
    app.route('/pengguna').get(pengguna.get);
    app.route('/pengguna/:id').get(pengguna.select);
    app.route('/pengguna/:id').put(pengguna.update);

    app.route('/anggotaPengguna').post(anggotaPengguna.create);
    app.route('/anggotaPengguna/all/:id').get(anggotaPengguna.get);
    app.route('/anggotaPengguna/:id').get(anggotaPengguna.select);   
    app.route('/anggotaPengguna/:id').put(anggotaPengguna.update);
    app.route('/anggotaPengguna/:id').delete(anggotaPengguna.delete);
    
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
