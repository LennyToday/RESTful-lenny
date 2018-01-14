var response = require("../shared/response");

module.exports = function (context, req) {
    context.res = response.success();
    context.done();
};
