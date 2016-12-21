(function ()
{
  'use strict';
   
   var compression = require('compression');
   var  express    = require('express');
   var app		   = express();
   var server      = require('http').Server(app);
   var port 	   = Number(process.env.PORT || 3000 );
   server.listen(port,function()
   	{
       console.log("app running on",port);
   	});
})();