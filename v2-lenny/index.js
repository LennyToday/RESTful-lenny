module.exports = function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: { 
            "Content-Type": "application/json; charset=utf-8"
        },
        body: { face: "( ͡° ͜ʖ ͡°)" }
    };

    context.done();
};
