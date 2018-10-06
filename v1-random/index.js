var gen           = require('random-seed'),
    lenny         = require('./lenny'),
    lennyFactory  = require('./lennyFactory'),
    errors        = require('./errors'),
    response      = require("../shared/response");

function getRandom(arr, seed) {
    var rand = gen.create(seed);
    return arr[Math.floor(rand.random() * (arr.length - 1))];
}

module.exports = function (context, req)
{
    var limit = req.query.limit;

    if(!limit || (limit = parseInt(limit)) == NaN){
        limit = 1;
    }

    if(limit > 500 || limit < 0){
        context.res = response.error(400, errors.fromCode(400), true);
        context.done();
    }

    if((req.query.lefteye && req.query.lefteye.length > 16) || 
        (req.query.leftear && req.query.leftear.length > 16) || 
        (req.query.righteye && req.query.righteye.length > 16) || 
        (req.query.rightear && req.query.rightear.length > 16) || 
        (req.query.ears && req.query.ears.length > 16) || 
        (req.query.eyes && req.query.eyes.length > 16) || 
        (req.query.mouth && req.query.mouth.length > 16))
    {
        context.res = response.error(400, errors.fromCode(400), true);
        context.done();
    }

    var lennies = [];

    for(var i = 0; i < limit; i++)
    {
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

        if(ear.length == 1)
            lennyface.leftear = ear[0], lennyface.rightear = ear[0];
        else
            lennyface.leftear = ear[0], lennyface.rightear = ear[1];

        if(eye.length == 1)
            lennyface.lefteye = eye[0], lennyface.righteye = eye[0];
        else
            lennyface.lefteye = eye[0], lennyface.righteye = eye[1];

        lennyface.mouth = mouth;
        lennyface = lennyFactory.create(req.query, lennyface);

        var resp = {
            seed: 1,
            face: lennyface.leftear + lennyface.lefteye + lennyface.mouth + lennyface.righteye + lennyface.rightear
        };

        lennies.push(resp);
    }

    context.res = response.success(lennies);
    context.done();
};
