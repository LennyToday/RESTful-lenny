function defaultLenny() {
  return {
    lefteye: " ͡°", 
    righteye: "͡°",
    leftear: "(",
    rightear: ")",
    mouth: " ͜ʖ "
  };
}

function create(lennyOptions, lennyFace) {

  lennyFace = lennyFace || defaultLenny();

  if(lennyOptions.lefteye){
    lennyFace.lefteye = lennyOptions.lefteye;
  }
  
  if(lennyOptions.righteye){
    lennyFace.righteye = lennyOptions.righteye;
  }
  
  if(lennyOptions.leftear){
    lennyFace.leftear = lennyOptions.leftear;
  }
  
  if(lennyOptions.rightear){
    lennyFace.rightear = lennyOptions.rightear;
  }
  
  if(lennyOptions.mouth){
    lennyFace.mouth = lennyOptions.mouth;
  }
  
  if(lennyOptions.eyes){
    lennyFace.lefteye = lennyOptions.eyes;
    lennyFace.righteye = lennyOptions.eyes;
  }
  
  if(lennyOptions.ears){
    lennyFace.leftear = lennyOptions.ears;
    lennyFace.rightear = lennyOptions.ears;
  }
  
  return lennyFace;
}

module.exports = {
  defaultLenny: defaultLenny,
  create: create
}