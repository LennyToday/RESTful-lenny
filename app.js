var restify       = require('restify'),
    gen           = require('random-seed'),
    lenny         = require('./lenny'),
    lennyFactory  = require('./lennyFactory'),
    errors        = require('./errors');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(function(req, res, next){
  console.log("[", new Date().toUTCString(), "] ", req.method, " ", req.url);
  next();
})

server.get('/api/v1/random', function(req, res, next) {

  if(!req.query.limit || parseInt(req.query.limit) < 0){
    req.query.limit = 1;
  } else {
    req.query.limit = parseInt(req.query.limit);
  }
  if(parseInt(req.query.limit) > 500 ||
     parseInt(req.query.limit) < 0 || 
     (req.query.lefteye && req.query.lefteye.length > 16) || 
     (req.query.leftear && req.query.leftear.length > 16) || 
     (req.query.righteye && req.query.righteye.length > 16) || 
     (req.query.rightear && req.query.rightear.length > 16) || 
     (req.query.ears && req.query.ears.length > 16) || 
     (req.query.eyes && req.query.eyes.length > 16) || 
     (req.query.mouth && req.query.mouth.length > 16)){
    res.status(400);
    res.json(errors.fromCode(400), {'content-type': 'application/json; charset=utf-8'})
    next();
  }

  var lennies = [];

  for(var i=0;i<req.query.limit;i++){


    var seed =  Math.floor((Math.random() * 4294967294));

    //Give seeds different values to ensure randomness
    var ear = getRandom(lenny.ears.all, seed),
        eye = getRandom(lenny.eyes.all, seed+1),
      mouth = getRandom(lenny.mouths.all, seed+2);
  
  
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
    lennyface = lennyFactory.create(req.query, lennyface);

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

server.get('/api/v1/lenny/ears', function(req, res, next) {
  res.json(lenny.ears.all);
  next();
});

server.get('/api/v1/lenny/eyes', function(req, res, next) {
  res.json(lenny.eyes.all);
  next();
});

server.get('/api/v1/lenny/mouths', function(req, res, next) {
  res.json(lenny.mouths.all);
  next();
});

server.get('/api/v1/lenny', function(req, res, next){

  if(!req.query.limit || parseInt(req.query.limit) < 0){
    req.query.limit = 1;
  } else {
    req.query.limit = parseInt(req.query.limit);
  }
  if(parseInt(req.query.limit) > 500 || 
     parseInt(req.query.limit) < 0 || 
     (req.query.lefteye && req.query.lefteye.length > 16) || 
     (req.query.leftear && req.query.leftear.length > 16) || 
     (req.query.righteye && req.query.righteye.length > 16) || 
     (req.query.rightear && req.query.rightear.length > 16) || 
     (req.query.ears && req.query.ears.length > 16) || 
     (req.query.eyes && req.query.eyes.length > 16) || 
     (req.query.mouth && req.query.mouth.length > 16)){
    res.status(400);
    res.json(errors.fromCode(400), {'content-type': 'application/json; charset=utf-8'})
    next();
  } 
  var lennies = [];

  for(var i=0;i<req.query.limit;i++) {

    var lennyface = lennyFactory.create(req.query, lennyFactory.defaultLenny());
   
    var response = {
      "face": lennyface.leftear + lennyface.lefteye + lennyface.mouth + lennyface.righteye + lennyface.rightear
    };
    
    lennies.push(response);
  }
    
  res.json(lennies, {'content-type': 'application/json; charset=utf-8'})
  next();
  
});

server.get('/api/v1/lenny/seed/:seedNumber', function(req, res, next) {

  if(!req.query.limit || parseInt(req.query.limit) < 0){
    req.query.limit = 1;
  } else {
    req.query.limit = parseInt(req.query.limit);
  }
  if(parseInt(req.query.limit) > 500 || 
     parseInt(req.query.limit) < 0 || 
     (req.query.lefteye && req.query.lefteye.length > 16) || 
     (req.query.leftear && req.query.leftear.length > 16) || 
     (req.query.righteye && req.query.righteye.length > 16) || 
     (req.query.rightear && req.query.rightear.length > 16) || 
     (req.query.ears && req.query.ears.length > 16) || 
     (req.query.eyes && req.query.eyes.length > 16) || 
     (req.query.mouth && req.query.mouth.length > 16)){
    res.status(400);
    res.json(errors.fromCode(400), {'content-type': 'application/json; charset=utf-8'})
    next();
  } else if(parseInt(req.params.seedNumber) < 0){
    res.status(400);
    res.json(errors.fromCode(400), {'content-type': 'application/json; charset=utf-8'})
    next();
  }

  var lennies = [];

  for(var i=0;i<req.query.limit;i++){

    var seed = parseInt(req.params.seedNumber);

    var ear = getRandom(lenny.ears.all,seed),
        eye = getRandom(lenny.eyes.all,seed+1),
      mouth = getRandom(lenny.mouths.all,seed+2);
  
  
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
  
    lennyface = lennyFactory.create(req.query, lennyface);

    var resp = {
      seed: seed,
      face: lennyface.leftear + lennyface.lefteye + lennyface.mouth + lennyface.righteye + lennyface.rightear
    };

    lennies.push(resp);
  }
  
  res.json(lennies, {'content-type': 'application/json; charset=utf-8'});
  next();
});


var port = process.env.PORT || 1999;
server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
});
