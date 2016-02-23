//special thanks to Raphael Rodriguez for providing a model
'use strict';
var moment = require('moment');

module.exports = function (app){
    app.get('/:query', function(req, res){
        var date = req.params.query;
        var unix = null;
        var natural = null;
         
        //check for initial unix time
        if( +date >= 0 ){
            unix = +date;
            natural = unixToNat(unix);
             var dateObj = { "unix": unix, "natural": natural };
        }//close if for unix
        //check for initial natural time
      else if ( moment(date, "MMMM D, YYYY").isValid) {
            unix = natToUnix(date);
            natural = unixToNat(unix);
            //make sure we don't have an invalid date
            if (natural != "Invalid date"){  
                var dateObj = { "unix": unix, "natural": natural };
            }//close if
            else {
            var dateObj = { "unix": null, "natural": null }; 
             }//close else
      }//close else if for natural
      
      res.send(JSON.stringify(dateObj));
      
    function natToUnix(date){
        //convert from natural date to unix timestamp
        return moment(date, "MMMM D, YYYY").format("X");
    }
    function unixToNat(unix){
        //convert from unix to naturaldate
        return moment.unix(unix).format("MMMM D, YYYY");
    }//close unixToNat
  }//close anon for app.get
 )//close app.get  
};//close module.exports
