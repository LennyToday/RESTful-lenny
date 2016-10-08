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
  
	
	var lennyface = {	
		lefteye: "",	
		righteye: "",
		leftear: "",
		rightear: "",
		mouth: ""
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
	lennyface.mouth = mouth;


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
      seed: seed,
      face: lennyface.leftear + lennyface.lefteye + lennyface.mouth + lennyface.righteye + lennyface.rightear
    };
    lennies.push(resp);
  }
  res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
  next();
});


function getRandom(arr,seed) {
  var rand = gen.create(seed);
  return arr[Math.floor(rand.random()*arr.length)];
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
