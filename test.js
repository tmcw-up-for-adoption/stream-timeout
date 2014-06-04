var test = require('tap').test,
    Timeout = require('./');

test('no timeout', function(t) {
    var stream = Timeout(10);
    stream.on('timeout', function() {
        t.fail('should not throw timeout');
    });
    stream.write('1');
    stream.write('2');
    stream.write('3');
    t.end();
});

test('timeout', function(t) {
    var stream = Timeout(10);
    stream.on('timeout', function() {
        t.pass('should throw timeout');
        t.end();
    });
    stream.write('1');
    setTimeout(function() {
        stream.write('2');
    }, 100);
});
