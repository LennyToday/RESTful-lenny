var restify       = require('restify'),
    gen           = require('random-seed'),
    mongoose      = require('mongoose'),
    config        = require('./config.json'),
    lenny         = require('./lenny'),
    lennyFactory  = require('./lennyFactory');

if (config.mongoose)
{
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
    Dizzle.save(function (err, ld) {
      if(err) console.log(err);
      if(err) return console.error(err);
    });
  });
}

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/api/v1/random', function(req, res, next) {

  console.log(req.query);

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
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'}, {'content-type': 'application/json; charset=utf-8'})
    next();
  }

  var lennies = [];

  for(var i=0;i<req.query.limit;i++){


    var seed =  Math.floor((Math.random() * 4294967294));

    //Give seeds different values to ensure randomness
    var ear = getRandom(lenny.ears,seed),
        eye = getRandom(lenny.eyes,seed+1),
      mouth = getRandom(lenny.mouths,seed+2);
  
  
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
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'}, {'content-type': 'application/json; charset=utf-8'})
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

server.get('/api/v1/lenny/name/:name', function(req, res, next) {

  console.log(req.query);

  if(!req.query.limit){
    req.query.limit = 1;
  } else if(parseInt(req.query.limit) > 500){
    res.status(400);
    res.json({'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'})
    return next();
  }
  
  if (!config.mongoose) {
    res.status(404);
    res.json({'ლ(⏓益⏓ლ)':'乁(ⴲ⏠ⴲ)ㄏ'})
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
        eye = getRandom(lenny.eyes,seed+1),
      mouth = getRandom(lenny.mouths,seed+2);
  
  
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

server.listen(config.port, function() {
    console.log('%s listening at %s', server.name, server.url);
});
