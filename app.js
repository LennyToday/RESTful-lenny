var restify  = require('restify'),
    gen      = require('random-seed'),
    mongoose = require('mongoose'),
    config   = require('./config.json'),
    lenny    = require('./lenny');

mongoose.connect('mongodb://localhost/lenniez');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


var lennySchema = mongoose.Schema({
  name: String,
  face: String
});

var lennyModel = mongoose.model('lenny', lennySchema);


db.once('open', function() {
  console.log('db online boyz');
  var lDizzle = new lennyModel({ name: 'lenny', face: '( ͡° ͜ʖ ͡°)'});
  lDizzle.save(function (err, ld) {
    if(err) console.log(err);
    if(err) return console.error(err);
  });
});


var server = restify.createServer();
server.use(restify.queryParser());

server.get('/api/v1/random', function(req, res, next) {

  console.log(req.query);

  if(!req.query.limit){
    req.query.limit = 1;
  } else if(parseInt(req.query.limit) > 500){
    res.status(400);
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'}, {'content-type': 'application/json; charset=utf-8'})
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


/*server.post('/api/v1/lenny', function(req, res, next)
{
  if(!req.query.name || !req.query.face){
    res.status(400); 
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'}, {'content-type': 'application/json; charset=utf-8'})
  } else {
    var newName = req.query.name;
    var newFace = req.query.face;

  lennyModel.find({name: newName}, function(err,newLen){ 
    if(err){
      res.status(500);
      lennies = {'[`╭╮`]':'ヽ(Ꝋ෴Ꝋ)ﾉ'};
      res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
      next();
    } 
      if(newLen.length > 0){
        res.status(409);
        res.json({'ლ(⏓益⏓ლ)':' ºل͟º ༼ ºل͟º ༼ ´ᗝ` ༽ ºل͟º ༽ ºل͟º ༽'}, {'content-type': 'application/json; charset=utf-8'})
	next();   
     } else {
	
      var newLenny = new lennyModel({name: newName, face: newFace});
      newLenny.save(function(err, newLenny){
	if(err){
	  res.status(500);
	  lennies = {'[`╭╮`]':'ヽ(Ꝋ෴Ꝋ)ﾉ'};
          res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
	  next();
	}
      });
      res.status(200);
      res.json({'ᕕ( ᐛ )ᕗ' : '( ͡° ͜ʖ ͡°)' }, {'content-type': 'application/json; charset=utf-8'})
      next();
  }

});
}
});*/

server.get('/api/v1/lenny', function(req, res, next)
{

  console.log(req.query);
  if(!req.query.limit){
    req.query.limit = 1;
  } else if(parseInt(req.query.limit) > 500){
    res.status(400);
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'}, {'content-type': 'application/json; charset=utf-8'})
    next();
  }	
  var lennies = [];

  for(var i=0;i<req.query.limit;i++){

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
	};
	lennies.push(response);
    }
    res.json(lennies, {'content-type': 'application/json; charset=utf-8'})
    next();
  
});


server.get('/api/v1/lenny/name/:name', function(req, res, next) {

  console.log(req.query);

  if(!req.query.limit){
    req.query.limit = 1;
  } else if(parseInt(req.query.limit) > 500){
    res.status(400);
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'})
    return next();
  }

  var lennies = [];


  lennyModel.find( { name: req.params.name}, function(err, lenns) {
    if(err) {
      res.status(500);
      lennies = {'[`╭╮`]':'ヽ(Ꝋ෴Ꝋ)ﾉ'};
      res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
      next();
    } else if(lenns.length == 0) {
      res.status(404);
      lennies = {'ლ(⏓益⏓ლ)':'乁(ⴲ⏠ⴲ)ㄏ'};
      res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
      next();
    } else {
      for(var i=0;i<req.query.limit;i++){

        var resp = {
          name: req.params.name,
          face: lenns[0].face
        };
        lennies.push(resp);
      }
      res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
      return next();
    }
  });
});


server.get('/api/v1/lenny/seed/:seedNumber', function(req, res, next) {

  console.log(req.query);

  if(!req.query.limit){
    req.query.limit = 1;
  } else if(parseInt(req.query.limit) > 500){
    res.status(400);
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'}, {'content-type': 'application/json; charset=utf-8'})
    next();
  } else if(parseInt(req.params.seedNumber) < 0){
    res.status(400);
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'}, {'content-type': 'application/json; charset=utf-8'})
    next();
  }

  var lennies = [];

  for(var i=0;i<req.query.limit;i++){


    var seed = parseInt(req.params.seedNumber);

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



server.listen(config.port, function() {
	  console.log('%s listening at %s', server.name, server.url);
});
