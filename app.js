var restify = require('restify');

function respond(req, res, next) {
	  res.send('hello ' + req.params.name);
	    next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/api/v1/lenny', function(req, res, next)
{
	console.log("Sending Default Lenny");
	
	var response = {
		"face": "( ͡° ͜ʖ ͡°)"
	}
	res.send(response);
	return next();
});





server.listen(parseInt(process.argv[2]), function() {
	  console.log('%s listening at %s', server.name, server.url);
});
