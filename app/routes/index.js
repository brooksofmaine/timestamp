/*
//my input
'use strict';
module.exports = function(app) {
    app.route('/')
        .get(function(req, res){
            res.sendfile(process.cwd() + '/public/index.html');
        });
};
*/
//Raphael's:
'use strict';

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });
};