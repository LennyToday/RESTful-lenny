var errors = {
  400: "{\"ლ(⏓益⏓ლ)\":\"┬─┬ノ( ´ᗝ`ノ)\"}"
}

function fromCode(code) {
  return errors[code] || "( ͡° ͜ʖ ͡°)";
}

module.exports = {
  fromCode: fromCode
}