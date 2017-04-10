# stream-timeout

[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/stream-timeout.svg)](https://greenkeeper.io/)

[![build status](https://secure.travis-ci.org/tmcw/stream-timeout.png)](http://travis-ci.org/tmcw/stream-timeout)

A stream that emits a timeout event if there's a large pause
after a chunk.

## api

```js
var stream = Timeout(delay, opts)

stream.on('timeout', function() {
    // too late
});
```

Delay is same as in setTimeout, opts is given to [Stream.Writable](http://nodejs.org/api/stream.html#stream_class_stream_writable).
