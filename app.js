var restify = require('restify'),
    gen     = require('random-seed'),
    lenny   = require('./lenny');

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/api/v1/random', function(req, res, next) {

  console.log(req.query);

  if(!req.query.limit){
    req.query.limit = 1;
  } else if(parseInt(req.query.limit) > 500){
    res.status(400);
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'})
  }

  var lennies = [];

  for(var i=0;i<req.query.limit;i++){

    var seed =  Math.floor((Math.random() * 4294967296));

    var ear = getRandom(lenny.ears,seed),
        eye = getRandom(lenny.eyes,seed),
      mouth = getRandom(lenny.mouths,seed);
  
    var lefteye, righteye, leftear, rightear;
  
    if(ear.length == 1) {
      leftear = ear[0], rightear = ear[0];
    } else {
      leftear = ear[0], rightear = ear[1];
    }

    if(eye.length == 1) {
      lefteye = eye[0], righteye = eye[0];
    } else {
      lefteye = eye[0], righteye = eye[1];
    }

    var resp = {
      seed: seed,
      face: leftear + lefteye + mouth + righteye + rightear
    };
    lennies.push(resp);
  }
  res.json(lennies);
  next();
});


function getRandom(arr,seed) {
  var rand = gen.create(seed);
  return arr[Math.floor(rand.random()*arr.length)];
}


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
