var errors = {
  400: {'ლ(⏓益⏓ლ)':'┬─┬ノ( ´ᗝ`ノ)'},
  404: {'ლ(⏓益⏓ლ)':'乁(ⴲ⏠ⴲ)ㄏ'},
  500: {'[`╭╮`]':'ヽ(Ꝋ෴Ꝋ)ﾉ'}
}

function fromCode(code) {
  return errors[code] || "( ͡° ͜ʖ ͡°)";
}

module.exports = {
  fromCode: fromCode
}