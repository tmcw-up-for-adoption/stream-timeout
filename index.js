var Writable = require('stream').Writable;

module.exports = function(timeout, opts) {
    var id;
    var ws = Writable(opts);
    ws._write = function (chunk, enc, next) {
        if (id) clearTimeout(id);
        id = setTimeout(function() {
            ws.emit('timeout');
        }, timeout);
        next();
    };
    return ws;
};
