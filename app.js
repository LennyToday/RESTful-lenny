var restify = require('restify'),
    lenny   = require('./lenny');

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/api/v1/random', function(req, res, next) {

  console.log(req.query);

  if(!req.query.limit){
    req.query.limit = 1;
  }

  var lennies = [];

  for(var i=0;i<req.query.limit;i++){

    var ear = getRandom(lenny.ears),
        eye = getRandom(lenny.eyes),
      mouth = getRandom(lenny.mouths);
 
	
	var lennyface = {	
		lefteye: " ͡°",	
		righteye: " ͡°",
		leftear: "(",
		rightear: ")",
		mouth: " ͜ʖ"
	};		

    if(ear.length == 1) {
     lennyface.leftear = ear[0], lennyface.rightear = ear[0];
    } else {
     lennyface.leftear = ear[0], lennyface.rightear = ear[1];
    }

    if(eye.length == 1) {
       lennyface.lefteye = eye[0], lennyface.righteye = eye[0];
    } else {
      lennyface.lefteye = eye[0], lennyface.righteye = eye[1];
    }


	if(req.query.lefteye){
		lennyface.lefteye = req.query.lefteye;
	}
	
	if(req.query.righteye){
		lennyface.righteye = req.query.righteye;
	}
	
	if(req.query.leftear){
		lennyface.leftear = req.query.leftear;
	}
	
	if(req.query.rightear){
		lennyface.rightear = req.query.rightear;
	}
	
	if(req.query.mouth){
		lennyface.mouth = req.query.mouth;
	}
	
	if(req.query.eyes){
		lennyface.lefteye = req.query.eyes;
		lennyface.righteye = req.query.eyes;
	}
	
	if(req.query.ears){
		lennyface.leftear = req.query.ears;
		lennyface.rightear = req.query.ears;
	}	

    var resp = {
      face: lennyface.leftear + lennyface.lefteye + lennyface.mouth + lennyface.righteye + lennyface.rightear
    };
    lennies.push(resp);
  }
  res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
  next();
});

function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}


server.get('/api/v1/lenny', function(req, res, next)
{
	var lennyface = {	
		lefteye: " ͡°",	
		righteye: " ͡°",
		leftear: "(",
		rightear: ")",
		mouth: " ͜ʖ"
	};		

	if(req.query.lefteye){
		lennyface.lefteye = req.query.lefteye;
	}
	
	if(req.query.righteye){
		lennyface.righteye = req.query.righteye;
	}
	
	if(req.query.leftear){
		lennyface.leftear = req.query.leftear;
	}
	
	if(req.query.rightear){
		lennyface.rightear = req.query.rightear;
	}
	
	if(req.query.mouth){
		lennyface.mouth = req.query.mouth;
	}
	
	if(req.query.eyes){
		lennyface.lefteye = req.query.eyes;
		lennyface.righteye = req.query.eyes;
	}
	
	if(req.query.ears){
		lennyface.leftear = req.query.ears;
		lennyface.rightear = req.query.ears;
	}	
	var response = {
		"face": lennyface.leftear + lennyface.lefteye + lennyface.mouth + lennyface.righteye + lennyface.rightear
	}
	res.send(response, {'content-type': 'application/json; charset=utf-8'});
	return next();
});





server.listen(parseInt(process.argv[2]), function() {
	  console.log('%s listening at %s', server.name, server.url);
});
