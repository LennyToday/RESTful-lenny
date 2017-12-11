module.exports = {
    success: function(body) {
        return {
            headers: { 
                "Content-Type": "application/json; charset=utf-8"
            },
            body: body
        };
    },
    error: function(status, body, isRaw) {
        return {
            status: status,
            headers: { 
                "Content-Type": "application/json; charset=utf-8"
            },
            isRaw: isRaw,
            body: body
        };
    }
};